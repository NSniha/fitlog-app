"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "./Container";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
    const pathname = usePathname();
    const { planCount, savedCount, setPlanTab } = useFitLog();
    const [menuOpen, setMenuOpen] = useState(false);

    const workoutsActive = pathname === "/" || pathname.startsWith("/workout/");
    const planActive = pathname === "/my-plan";

    const closeMenu = () => setMenuOpen(false);

    const openPlan = () => {
        setPlanTab("plan");
        closeMenu();
    };

    const openSaved = () => {
        setPlanTab("saved");
        closeMenu();
    };

    return (
        <header className="relative z-50 w-full border-b border-[#20242b] bg-[#0b0d10]">
            <Container>
                <nav className="relative flex h-18 items-center justify-between md:h-20">
                    <Link href="/" onClick={closeMenu} aria-label="FitLog home" className="flex shrink-0 items-center">
                        <Image src="/assets/icons/fitlog-logo.svg" alt="FitLog" width={120} height={38} priority className="h-auto w-24 sm:w-26 md:w-27.5" />
                    </Link>

                    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 md:flex">
                        <Link href="/" className={`text-[15px] font-medium transition-all duration-300 hover:text-[#c8ff00]! ${workoutsActive ? "text-[#c8ff00]!" : "text-white/75!"}`}>
                            Workouts
                        </Link>

                        <Link href="/my-plan" onClick={openPlan} className={`text-[15px] font-medium transition-all duration-300 hover:text-[#c8ff00]! ${planActive ? "text-[#c8ff00]!" : "text-white/75!"}`}>
                            My Plan
                        </Link>
                    </div>

                    <div className="hidden items-center gap-7 md:flex">
                        <Link href="/my-plan" onClick={openPlan} className="flex items-center gap-2.5 text-white! transition-colors duration-300 hover:text-[#c8ff00]!">
                            <span className="text-[13px] font-medium">Plan</span>
                            <span className="flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-[#c8ff00] px-1.5 text-[11px] font-bold leading-none text-[#090b0d]!">{planCount}</span>
                        </Link>

                        <Link href="/my-plan" onClick={openSaved} className="flex items-center gap-2.5 text-white! transition-colors duration-300 hover:text-[#c8ff00]!">
                            <span className="text-[13px] font-medium">Saved</span>
                            <span className="flex h-5.5 min-w-5.5 items-center justify-center rounded-full border border-[#414751] px-1.5 text-[11px] leading-none text-[#c5c8cf]!">{savedCount}</span>
                        </Link>
                    </div>

                    <button type="button" onClick={() => setMenuOpen((prev) => !prev)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" className="flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[#15181d] text-white! transition-all duration-300 hover:text-[#c8ff00]! md:hidden">
                        {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={23} strokeWidth={2} />}
                    </button>
                </nav>
            </Container>

            <div id="mobile-navigation" className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#20242b] bg-[#0b0d10] shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 md:hidden ${menuOpen ? "visible max-h-85 opacity-100" : "invisible max-h-0 opacity-0"}`}>
                <Container className="py-4">
                    <div className="rounded-2xl bg-[#14171c] p-2">
                        <Link href="/" onClick={closeMenu} className={`flex min-h-13 items-center rounded-xl px-4 text-[15px] font-medium transition-colors duration-300 hover:text-[#c8ff00]! ${workoutsActive ? "text-[#c8ff00]!" : "text-white!"}`}>
                            Workouts
                        </Link>

                        <Link href="/my-plan" onClick={openPlan} className={`flex min-h-13 items-center rounded-xl px-4 text-[15px] font-medium transition-colors duration-300 hover:text-[#c8ff00]! ${planActive ? "text-[#c8ff00]!" : "text-white!"}`}>
                            My Plan
                        </Link>

                        <div className="mt-2 border-t border-[#262a31] px-2 pt-4">
                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#767b86]!">Workout Status</p>

                            <div className="grid grid-cols-2 gap-3">
                                <Link href="/my-plan" onClick={openPlan} className="flex h-12.5 items-center justify-between rounded-xl bg-[#0e1115] px-4 text-white! transition-colors duration-300 hover:text-[#c8ff00]!">
                                    <span className="text-[13px] font-medium">Plan</span>
                                    <span className="flex h-5.75 min-w-5.75 items-center justify-center rounded-full bg-[#c8ff00] px-1.5 text-[11px] font-bold text-black!">{planCount}</span>
                                </Link>

                                <Link href="/my-plan" onClick={openSaved} className="flex h-12.5 items-center justify-between rounded-xl bg-[#0e1115] px-4 text-white! transition-colors duration-300 hover:text-[#c8ff00]!">
                                    <span className="text-[13px] font-medium">Saved</span>
                                    <span className="flex h-5.75 min-w-5.75 items-center justify-center rounded-full border border-[#414751] px-1.5 text-[11px] text-[#c5c8cf]!">{savedCount}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}