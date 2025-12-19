import React, { useState } from 'react';
import { MessageCircle, X, ChevronDown, ChevronUp, Send } from 'lucide-react';
import '../styles/WhatsAppWidget.css';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const phoneNumber = "918129829294"; // From Contact.jsx
    const defaultMessage = "Hi! I'm interested in ReboundLabs services.";

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We specialize in Web Development, UI/UX Design, Mobile Apps, AI Integration, Web Security, and Cloud Solutions."
        },
        {
            question: "How much does a project cost?",
            answer: "Project costs vary based on scope and complexity. Chat with us for a free consultation and quote!"
        },
        {
            question: "Do you provide support after launch?",
            answer: "Yes! We offer continuous optimization and support packages to ensure your digital product remains top-notch."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleStartChat = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <div className={`whatsapp-widget ${isOpen ? 'open' : ''}`}>
            {/* Chat Window */}
            <div className={`whatsapp-window glass-panel ${isOpen ? 'visible' : ''}`}>
                <div className="whatsapp-header">
                    <div className="whatsapp-header-info">
                        <MessageCircle size={24} className="whatsapp-logo" />
                        <div>
                            <h4>ReboundLabs Support</h4>
                            <span className="online-status">● Typically replies instantly</span>
                        </div>
                    </div>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <div className="whatsapp-body">
                    <div className="whatsapp-intro">
                        <p>Hello! 👋 <br />How can we help you today?</p>
                    </div>

                    <div className="faq-section">
                        <h5>Frequently Asked Questions</h5>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                                    <button className="faq-question" onClick={() => toggleFaq(index)}>
                                        {faq.question}
                                        {openFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="whatsapp-footer">
                    <button className="start-chat-btn" onClick={handleStartChat}>
                        Start Chat <Send size={18} />
                    </button>
                </div>
            </div>

            {/* Floating Button */}
            <button className="whatsapp-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default WhatsAppWidget;
