import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Container from "@/components/layout/Container";

export default function Hero() {
    return (
        <section className="bg-[#0b0d10] py-12 sm:py-14 lg:py-14">
            <Container>
                <div className="grid min-h-117.5 overflow-hidden rounded-[14px] border border-[#252a32] bg-[#15181e] lg:grid-cols-[1.25fr_0.75fr] lg:min-h-125">
                    <div className="flex flex-col justify-center px-7 py-12 sm:px-10 md:px-12 lg:px-14 xl:px-16">
                        <p className="mb-7 text-[12px] font-bold uppercase tracking-[0.08em] text-[#c8ff00] sm:text-[13px]">
                            Strength Training Library
                        </p>

                        <h1 className="font-oswald max-w-175 text-[43px] font-bold uppercase leading-[1.06] tracking-[-0.02em] text-[#f6f7f8] sm:text-[52px] md:text-[56px] lg:text-[60px] lg:leading-[1.06] xl:text-[68px]">
                            Build Strength. Track Every Rep.
                        </h1>

                        <p className="mt-6 max-w-155 text-[15px] leading-[1.7] text-[#989da8] md:text-[16px]">
                            Choose your next lift, add it to today&apos;s plan, and keep every workout organized while building consistent progress session after session.
                        </p>

                        <div className="mt-7">
                            <Link href="#library" className="group inline-flex h-11.5 items-center justify-center gap-2 rounded-[5px] bg-[#c8ff00] px-6 text-[12px] font-bold uppercase text-[#080a0c]! transition-all duration-300 hover:bg-[#d7ff36] active:scale-[0.98] sm:px-7">
                                Explore Workouts
                                <ArrowDown size={15} strokeWidth={2.4} className="transition-transform duration-300 group-hover:translate-y-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex min-h-85 items-center justify-center px-4 pb-10 sm:min-h-97.5 sm:px-6 lg:min-h-full lg:px-0 lg:pb-0">
                        <div className="relative h-80 w-full max-w-87.5 sm:h-97.5 sm:max-w-105 lg:h-125 lg:max-w-140 xl:h-140 xl:max-w-155">
                            <Image src="/assets/images/hero/hero-workout.png" alt="Athlete performing a strength training exercise" fill priority sizes="(max-width: 640px) 350px, (max-width: 1024px) 420px, (max-width: 1280px) 560px, 620px" className="object-contain object-center" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}