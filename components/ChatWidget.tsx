"use client";

import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
};

const PREDEFINED_QUESTIONS = [
    "What services do you offer?",
    "How fast is the delivery?",
    "What is the pricing?",
    "Can I talk to a human?",
];

const BOT_RESPONSES: { [key: string]: string } = {
    default: "I am an AI assistant. For specific inquiries, please contact our support team or browse our services via the menu.",
    services: "We offer a 10-in-1 media solution including Reels shoots, YouTube vlogs, Podcast production, News & media content, Brand marketing, Wedding shoots, and more. All delivered insanely fast.",
    pricing: "Our pricing is tailored to your needs. Please visit our 'Pricing' section or contact us for a custom quote.",
    delivery: "We are the World's First platform to shoot, edit, and deliver reels in just 10 minutes! Speed is our defining feature.",
    human: "You can reach our team directly at contact@dhashamedia.com or book a session via the 'Contact Us' page.",
    hello: "Hello! How can I assist you with Dhasha Media today?",
    hi: "Hi there! Ready to create some amazing content?",
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! How can we help you today?", sender: 'bot' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const idCounter = useRef(2); 

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const getBotResponse = (input: string) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("service") || lowerInput.includes("offer") || lowerInput.includes("what do you do")) return BOT_RESPONSES.services;
        if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("rate")) return BOT_RESPONSES.pricing;
        if (lowerInput.includes("fast") || lowerInput.includes("time") || lowerInput.includes("delivery") || lowerInput.includes("speed") || lowerInput.includes("10")) return BOT_RESPONSES.delivery;
        if (lowerInput.includes("human") || lowerInput.includes("contact") || lowerInput.includes("support") || lowerInput.includes("email") || lowerInput.includes("phone")) return BOT_RESPONSES.human;
        if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) return BOT_RESPONSES.hello;

        return BOT_RESPONSES.default;
    };

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newId = idCounter.current++;
        const newUserMessage: Message = {
            id: newId,
            text: text,
            sender: 'user',
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");

        setTimeout(() => {
            const botResponseText = getBotResponse(text);
            const botId = idCounter.current++;
            const newBotMessage: Message = {
                id: botId,
                text: botResponseText,
                sender: 'bot',
            };
            setMessages(prev => [...prev, newBotMessage]);
        }, 600);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage(inputValue);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
   
            {isOpen && (
                <div className="mb-4 w-[90vw] sm:w-[420px] h-[600px] max-h-[80vh] bg-black border border-[#DAC291]/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-[#DAC291] p-5 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-black/10 rounded-full">
                                <Bot size={24} className="text-black" />
                            </div>
                            <div>
                                <h3 className="text-black font-bold text-xl">Dhasha AI</h3>
                                <p className="text-black/70 text-sm font-medium">Online • Replies instantly</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-black hover:bg-black/10 rounded-full p-1.5 transition-colors"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    <div className="flex-1 bg-black p-5 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-[#DAC291]/20 scrollbar-track-transparent">

                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`
                                    max-w-[85%] p-3.5 text-sm leading-relaxed rounded-2xl
                                    ${msg.sender === 'user'
                                        ? 'bg-[#DAC291] text-black rounded-tr-none font-medium'
                                        : 'bg-[#1A1A1A] border border-[#DAC291]/10 text-white/90 rounded-tl-none'}
                                `}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="px-4 py-2 bg-black border-t border-[#DAC291]/5 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <div className="flex gap-2">
                            {PREDEFINED_QUESTIONS.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSendMessage(q)}
                                    className="inline-block px-3 py-1.5 rounded-full border border-[#DAC291]/30 bg-[#DAC291]/5 text-[#DAC291] text-xs font-medium hover:bg-[#DAC291] hover:text-black transition-all"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-black border-t border-[#DAC291]/10 shrink-0">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask us anything..."
                                className="flex-1 bg-[#1A1A1A] border border-[#DAC291]/20 rounded-full px-5 py-3 text-white text-sm focus:outline-none focus:border-[#DAC291] transition-colors"
                            />
                            <button
                                onClick={() => handleSendMessage(inputValue)}
                                disabled={!inputValue.trim()}
                                className="bg-[#DAC291] text-black w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#C5AE7E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={toggleChat}
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 border border-[#DAC291]/20 ${isOpen
                    ? "bg-black text-[#DAC291] rotate-90"
                    : "bg-[#DAC291] text-black hover:scale-110 active:scale-95"
                    }`}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                {isOpen ? <X size={28} strokeWidth={2} /> : <MessageCircle size={28} strokeWidth={2} />}
            </button>
        </div>
    );
}
