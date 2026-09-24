import Container from "@/components/layout/Container";

export default function Loading() {
    return (
        <section className="flex min-h-[60vh] items-center bg-[#0b0d10] py-14">
            <Container>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                        <span className="absolute h-12 w-12 animate-spin rounded-full border-2 border-[#292e37] border-t-[#c8ff00]" />
                        <span className="h-2 w-2 rounded-full bg-[#c8ff00]" />
                    </div>

                    <h2 className="font-oswald mt-5 text-[20px] font-semibold uppercase tracking-[0.02em] text-[#f5f6f7] sm:text-[22px]">
                        Loading Workouts
                    </h2>

                    <p className="mt-2 text-[12px] text-[#858b96] sm:text-[13px]">
                        Preparing your next training session...
                    </p>

                    <div className="mt-5 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c8ff00]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c8ff00] [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c8ff00] [animation-delay:300ms]" />
                    </div>
                </div>
            </Container>
        </section>
    );
}