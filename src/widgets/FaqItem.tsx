"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm rounded-xl p-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center text-left shadow-2xl"
      >
        <span className="font-medium">{question}</span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-10 mt-3 mb-3" : "max-h-0"
        }`}
      >
        <div className="border-b border-gray-200"></div>
      </div>

      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-snug">{answer}</p>
      )}
    </div>
  );
}
