"use client";

import { MessageCircle, X, Send, Sparkles, Cpu } from "lucide-react";
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
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mb-4 w-[90vw] sm:w-[420px] h-[600px] max-h-[80vh] bg-black/90 border border-[#DAC291]/30 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden flex flex-col"
                    >
                        <div className="relative p-6 flex items-center justify-between shrink-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#DAC291]/10 to-transparent pointer-events-none" />
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-tr from-[#B89E6C] to-[#EAD7B0] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(218,194,145,0.3)]">
                                        <Cpu size={24} className="text-black" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#DAC291] rounded-full border-4 border-black animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
                                        Dhasha AI <Sparkles size={14} className="text-[#DAC291]" />
                                    </h3>
                                    <p className="text-[#DAC291]/60 text-xs font-medium uppercase tracking-widest">Neural assistant active</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-all relative z-10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 px-6 py-4 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-[#DAC291]/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`
                                        max-w-[85%] px-5 py-3.5 text-sm leading-relaxed rounded-3xl
                                        ${msg.sender === 'user'
                                            ? 'bg-gradient-to-tr from-[#B89E6C] to-[#DAC291] text-black rounded-tr-none font-semibold shadow-lg shadow-[#DAC291]/5'
                                            : 'bg-zinc-900/50 border border-white/5 text-white/90 rounded-tl-none backdrop-blur-sm'}
                                    `}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-3xl rounded-tl-none backdrop-blur-sm flex gap-1.5">
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#DAC291] rounded-full" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#DAC291] rounded-full" />
                                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#DAC291] rounded-full" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="px-6 py-3 border-t border-white/5 overflow-x-auto whitespace-nowrap scrollbar-hide shrink-0">
                            <div className="flex gap-2">
                                {PREDEFINED_QUESTIONS.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(q)}
                                        className="inline-block px-4 py-2 rounded-xl border border-[#DAC291]/20 bg-[#DAC291]/5 text-[#DAC291] text-[10px] font-bold uppercase tracking-wider hover:bg-[#DAC291] hover:text-black transition-all"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 shrink-0">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type a message..."
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#DAC291]/50 transition-all backdrop-blur-md placeholder:text-white/20"
                                />
                                <button
                                    onClick={() => handleSendMessage(inputValue)}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="absolute right-2 bg-[#DAC291] text-black w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#EAD7B0] transition-all disabled:opacity-20 disabled:scale-95 shadow-lg shadow-[#DAC291]/10"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <p className="mt-3 text-center text-[9px] text-white/20 uppercase tracking-[0.3em] font-medium">Powered by Dhasha Neural Engine</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className={`group relative flex items-center justify-center w-16 h-16 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden border border-[#DAC291]/30 ${isOpen
                    ? "bg-white/10 backdrop-blur-xl text-white rotate-90"
                    : "bg-gradient-to-tr from-[#B89E6C] to-[#EAD7B0] text-black"
                    }`}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
}
