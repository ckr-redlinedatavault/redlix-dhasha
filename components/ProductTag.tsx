"use client";

import { useState } from "react";

export default function ProductTag() {
    const [displayText, setDisplayText] = useState("Product of Redlix");

    const handleClick = () => {
        setDisplayText((prev) =>
            prev === "Product of Redlix" ? "Contact the developer" : "Product of Redlix"
        );
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 select-none">
            <div
                onClick={handleClick}
                className="px-4 py-1.5 bg-red-600/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl cursor-pointer hover:bg-red-700/90 transition-all duration-300 active:scale-95"
            >
                <span className="text-[10px] uppercase tracking-widest font-medium text-white">
                    {displayText}
                </span>
            </div>
        </div>
    );
}
