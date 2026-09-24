import { CheckCircle2, CircleAlert, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
    if (!toast) return null;

    const isError = toast.type === "error";

    return (
        <div className="fixed bottom-4 right-3 z-[100] w-[calc(100%-24px)] max-w-[285px] sm:bottom-auto sm:right-5 sm:top-[88px] sm:w-full sm:max-w-[320px] lg:right-7 lg:top-[92px]">
            <div className="flex items-center gap-2.5 rounded-[10px] border border-[#30353d] bg-[#171a20] px-3.5 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.4)] sm:gap-3 sm:px-4 sm:py-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9 ${isError ? "bg-red-500/10 text-red-400" : "bg-[#c8ff00]/10 text-[#c8ff00]"}`}>
                    {isError ? <CircleAlert size={16} strokeWidth={2} /> : <CheckCircle2 size={16} strokeWidth={2} />}
                </span>

                <p className="min-w-0 flex-1 text-[12px] font-medium leading-[1.5] text-[#e6e8ec] sm:text-[12px] sm:leading-5">
                    {toast.message}
                </p>

                <button type="button" onClick={onClose} aria-label="Close notification" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#7f8590]! transition-colors duration-300 hover:bg-[#24282f] hover:text-white!">
                    <X size={15} strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}