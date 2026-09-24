export default function PlanTabs({ activeTab, onChange }) {
    return (
        <div className="inline-flex w-full max-w-62.5 items-center rounded-[10px] border border-[#292e37] bg-[#15181e] p-1">
            <button type="button" onClick={() => onChange("plan")} className={`flex h-9 flex-1 items-center justify-center whitespace-nowrap rounded-[7px] px-4 text-[12px]! font-medium! leading-none! transition-all duration-300 lg:text-[13px]! ${activeTab === "plan" ? "bg-[#282e38] text-white!" : "text-[#8f949e]! hover:text-white!"}`}>Today&apos;s Plan</button>

            <button type="button" onClick={() => onChange("saved")} className={`flex h-9 flex-1 items-center justify-center whitespace-nowrap rounded-[7px] px-4 text-[12px]! font-medium! leading-none! transition-all duration-300 lg:text-[13px]! ${activeTab === "saved" ? "bg-[#282e38] text-white!" : "text-[#8f949e]! hover:text-white!"}`}>Saved</button>
        </div>
    );
}