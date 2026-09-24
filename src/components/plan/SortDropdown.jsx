"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const options = [
    { label: "Duration", value: "duration" },
    { label: "Calories", value: "calories" },
    { label: "Rating", value: "rating" },
];

export default function SortDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const selectedOption = options.find((option) => option.value === value) || options[0];

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpen(false);
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setOpen(false);
    };

    return (
        <div className="flex items-center justify-end gap-3">
            <span className="whitespace-nowrap text-[12px] text-[#838995] lg:text-[13px]">Sort By</span>

            <div ref={dropdownRef} className="relative">
                <button type="button" onClick={() => setOpen((prev) => !prev)} aria-haspopup="listbox" aria-expanded={open} className={`flex h-9.5 min-w-30 items-center justify-between gap-3 rounded-lg border bg-[#15181e] px-3.5 text-[12px]! font-medium! leading-none! text-[#e4e7eb]! transition-all duration-300 lg:text-[13px]! ${open ? "border-[#4a515d]" : "border-[#292e37] hover:border-[#3b424d]"}`}>
                    <span>{selectedOption.label}</span>
                    <ChevronDown size={15} strokeWidth={1.8} className={`text-[#858b96] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>

                <div className={`absolute right-0 top-[calc(100%+8px)] z-40 w-37.5 origin-top-right overflow-hidden rounded-[9px] border border-[#30353d] bg-[#171a20] p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.4)] transition-all duration-200 ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1 scale-[0.98] opacity-0"}`}>
                    {options.map((option) => {
                        const active = value === option.value;

                        return (
                            <button key={option.value} type="button" onClick={() => handleSelect(option.value)} role="option" aria-selected={active} className={`flex h-9.5 w-full items-center justify-between rounded-md px-3 text-left text-[12px]! font-medium! leading-none! transition-colors duration-200 lg:text-[13px]! ${active ? "bg-[#252b34] text-[#c8ff00]!" : "text-[#c6cad1]! hover:bg-[#20242b] hover:text-white!"}`}>
                                <span>{option.label}</span>
                                {active && <Check size={14} strokeWidth={2.2} className="text-[#c8ff00]" />}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}