"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    default: "I am the Dhasha AI assistant. For specific inquiries, please contact our support team or browse our services via the menu.",
    services: "We offer a 10-in-1 media solution including Reels shoots, YouTube vlogs, Podcast production, News & media content, Brand marketing, Wedding shoots, and more. All delivered in record time.",
    pricing: "Our pricing is tailored to your production needs. Please visit our 'Pricing' section or contact us for a personalized quote.",
    delivery: "We are the first platform to shoot, edit, and deliver reels in just 10 minutes! Our speed is our signature.",
    human: "You can reach our team directly at contact@dhashamedia.com or book a session via the 'Contact Us' page.",
    hello: "Greetings! I'm Dhasha AI. How can I help you define your digital legacy today?",
    hi: "Hi there! Ready to create content that stands out?",
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Welcome to Dhasha Media. I am your AI production assistant. How can I help you today?", sender: 'bot' }
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
    }, [messages, isOpen, isTyping]);

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
        if (!text.trim() || isTyping) return;

        const newId = idCounter.current++;
        const newUserMessage: Message = {
            id: newId,
            text: text,
            sender: 'user',
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            const botResponseText = getBotResponse(text);
            const botId = idCounter.current++;
            const newBotMessage: Message = {
                id: botId,
                text: botResponseText,
                sender: 'bot',
            };
            setMessages(prev => [...prev, newBotMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage(inputValue);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[90vw] sm:w-[400px] h-[550px] max-h-[80vh] bg-black border border-white/20 shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-black">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-[#DAC291]" />
                                <div>
                                    <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Dhasha AI</h3>
                                    <p className="text-[#DAC291]/40 text-[9px] uppercase tracking-[0.2em] font-medium">Neural System Active</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-white/40 hover:text-white text-[10px] font-bold uppercase tracking-widest px-2"
                            >
                                Close
                            </button>
                        </div>

                        <div className="flex-1 px-6 py-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`
                                        max-w-[85%] px-5 py-4 text-xs leading-relaxed border
                                        ${msg.sender === 'user'
                                            ? 'bg-white text-black border-white font-bold'
                                            : 'bg-black border-white/10 text-white/80'}
                                    `}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-black border border-white/10 px-4 py-3 text-[9px] text-[#DAC291] font-bold uppercase tracking-[0.3em]">
                                        Processing...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="px-6 py-3 border-t border-white/5 overflow-x-auto whitespace-nowrap scrollbar-hide shrink-0 bg-black">
                            <div className="flex gap-2">
                                {PREDEFINED_QUESTIONS.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(q)}
                                        className="inline-block px-4 py-2 border border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-wider hover:border-white/40 hover:text-white transition-all"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 shrink-0 bg-black">
                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="TYPE MESSAGE"
                                    className="flex-1 bg-black border border-white/20 px-5 py-4 text-white text-[10px] uppercase font-bold tracking-widest focus:outline-none focus:border-white transition-all placeholder:text-white/10"
                                />
                                <button
                                    onClick={() => handleSendMessage(inputValue)}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-white text-black px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white/90 transition-all disabled:opacity-10"
                                >
                                    Send
                                </button>
                            </div>
                            <p className="mt-4 text-center text-[8px] text-white/10 uppercase tracking-[0.4em] font-medium">Dhasha Media Core Engine v1.0</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleChat}
                className={`flex items-center justify-center h-16 px-8 border transition-all duration-300 ${isOpen
                    ? "bg-black border-white/20 text-white"
                    : "bg-white border-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:scale-105 active:scale-95"
                    }`}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                {isOpen ? "Close" : "Chat"}
            </button>
        </div>
    );
}
