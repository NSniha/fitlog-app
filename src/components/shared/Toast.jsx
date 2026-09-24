import { CheckCircle2, CircleAlert, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
    if (!toast) return null;

    const isError = toast.type === "error";

    return (
        <div className="fixed right-4 top-22 z-100 w-[calc(100%-32px)] max-w-90 sm:right-6 sm:top-24">
            <div className="flex items-center gap-3 rounded-xl border border-[#30353d] bg-[#171a20] px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isError ? "bg-red-500/10 text-red-400" : "bg-[#c8ff00]/10 text-[#c8ff00]"}`}>
                    {isError ? <CircleAlert size={18} /> : <CheckCircle2 size={18} />}
                </span>

                <p className="flex-1 text-[13px] font-medium leading-5 text-[#e6e8ec]">{toast.message}</p>

                <button type="button" onClick={onClose} aria-label="Close notification" className="text-[#7f8590] transition-colors duration-300 hover:text-white">
                    <X size={17} />
                </button>
            </div>
        </div>
    );
}