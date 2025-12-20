import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import '../styles/AIChatWidget.css';

const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm Rebound AI. How can I help you today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    // OpenAI Configuration
    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    const fetchOpenAIResponse = async (userText) => {
        if (!OPENAI_API_KEY) {
            return "Please configure your OpenAI API Key in AIChatWidget.jsx to enable real AI chat.";
        }

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        {
                            role: "system",
                            content: `You are the official AI assistant of Rebound Labs. Answer questions clearly, professionally, and briefly. Promote Rebound Labs honestly without exaggeration. If unsure, guide users to contact the team via the website form or WhatsApp.

                            **About Rebound Labs:**
                            - **What is it?**: A Kerala-based web development startup by young developers, building modern, responsive, high-performance websites and web apps.
                            - **Location**: Based in Kerala, India; serving clients globally.
                            - **Why Choose Us?**: Young dedicated team, personalized solutions, modern tech, clear communication, affordable pricing.
                            - **Target Audience**: Startups, small businesses, personal brands, growing companies.

                            **Services:**
                            - Custom website & web app development.
                            - UI/UX design.
                            - Responsive layouts & performance optimization.
                            - Third-party integrations (Chat, Payment, Analytics).
                            - Deployment & Maintenance.

                            **Project & Process:**
                            - **How to Start**: Fill out the website setup form or contact via WhatsApp.
                            - **Timeline**: 1-4 weeks typically, depending on scope.
                            - **Customization**: Yes, every project is fully customized.
                            - **Revisions**: Yes, limited revisions offered during development.
                            - **Maintenance**: Yes, we provide ongoing support, bug fixes, and updates.

                            **Technical:**
                            - **Mobile-Friendly**: Yes, fully responsive for all devices.
                            - **Hosting/Deployment**: Yes, we assist with domain, SSL, and hosting setup.
                            - **Redesign**: Yes, we modernize existing websites.

                            **Pricing & Trust:**
                            - **Affordable**: Yes, startup-friendly pricing.
                            - **Free Consultation**: Yes.
                            - **SEO**: Yes, built with best practices.
                            - **NDAs**: Yes, available upon request.

                            **Contact & Support:**
                            - **Methods**: Website form or WhatsApp chat.
                            - **Communication**: WhatsApp, email, or calls.`
                        },
                        { role: "user", content: userText }
                    ],
                    max_tokens: 150
                })
            });

            const data = await response.json();

            if (data.error) {
                console.error("OpenAI Error:", data.error);
                return `Error: ${data.error.message || "Unknown error"}`;
            }

            return data.choices[0].message.content.trim();
        } catch (error) {
            console.error("Fetch Error:", error);
            return `Connection Error: ${error.message}`;
        }
    };

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputText("");
        setIsTyping(true);

        // Fetch real AI response
        const botResponseText = await fetchOpenAIResponse(userMessage.text);

        const botMessage = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    return (
        <div className={`ai-chat-widget ${isOpen ? 'open' : ''}`}>
            <div className="ai-chat-window">
                <div className="ai-header">
                    <div className="ai-brand">
                        <div className="ai-avatar-wrapper">
                            <div className="ai-avatar">
                                <Bot size={24} />
                            </div>
                            <div className="ai-status-dot"></div>
                        </div>
                        <div className="ai-info">
                            <h4>Rebound AI</h4>
                            <span>Active Now</span>
                        </div>
                    </div>
                    <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <div className="ai-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="ai-input-area">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="ai-send-btn" onClick={handleSendMessage} disabled={!inputText.trim()}>
                        <Send size={20} />
                    </button>
                </div>
            </div>

            <button className="ai-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </button>
        </div>
    );
};

export default AIChatWidget;
