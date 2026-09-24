import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";
import Container from "@/components/layout/Container";

export default function NotFound() {
    return (
        <section className="flex min-h-[65vh] items-center bg-[#0b0d10] py-14 sm:py-18 lg:py-20">
            <Container>
                <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#30353d] bg-[#15181e] text-[#c8ff00]">
                        <Dumbbell size={25} strokeWidth={1.8} />
                    </div>

                    <p className="font-oswald mt-6 text-[72px] font-bold leading-none text-[#c8ff00] sm:text-[90px] lg:text-[108px]">404</p>

                    <h1 className="font-oswald mt-4 text-[28px] font-semibold uppercase leading-tight text-[#f5f6f7] sm:text-[34px] lg:text-[38px]">
                        Workout Not Found
                    </h1>

                    <p className="mt-3 max-w-[520px] text-[13px] leading-6 text-[#8f949e] sm:text-[14px] lg:text-[15px]">
                        The page or workout you&apos;re looking for doesn&apos;t exist. Head back to the workout library and choose your next exercise.
                    </p>

                    <Link href="/" className="group mt-7 inline-flex h-11.5 items-center justify-center gap-2 rounded-[5px] bg-[#c8ff00] px-6 text-[12px] font-bold uppercase text-[#080a0c]! transition-all duration-300 hover:bg-[#d7ff36] active:scale-[0.98] sm:px-7">
                        <ArrowLeft size={15} strokeWidth={2.4} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        Back to Workouts
                    </Link>
                </div>
            </Container>
        </section>
    );
}