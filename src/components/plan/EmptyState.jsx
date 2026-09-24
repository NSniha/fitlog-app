import Link from "next/link";

export default function EmptyState({ activeTab }) {
    const isPlan = activeTab === "plan";

    return (
        <div className="flex min-h-75 flex-col items-center justify-center rounded-[14px] border border-dashed border-[#292e37] px-5 py-12 text-center sm:min-h-80">
            <h2 className="font-oswald text-[20px] font-semibold uppercase tracking-[0.02em] text-[#f5f6f7] sm:text-[22px]">Nothing Here Yet</h2>

            <p className="mt-2 max-w-110 text-[12px] leading-5 text-[#858b96] sm:text-[13px]">
                {isPlan ? "Browse the library and add a workout to start today's session." : "Browse the library and save a workout for later."}
            </p>

            <Link href="/" className="mt-6 inline-flex h-[40px] items-center justify-center rounded-full bg-[#c8ff00] px-6 text-[11px]! font-semibold! text-[#080a0c]! transition-all duration-300 hover:bg-[#d7ff36] active:scale-[0.98] sm:text-[12px]!">Go to workouts</Link>
        </div>
    );
}