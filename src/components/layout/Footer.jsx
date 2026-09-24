import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#20242b] bg-[#0b0d10]">
      <Container>
        <div className="flex min-h-27.5 flex-col items-center justify-center gap-4 py-7 sm:flex-row sm:justify-between sm:gap-6">
          <Link href="/" aria-label="FitLog home" className="shrink-0">
            <Image src="/assets/icons/fitlog-logo.svg" alt="FitLog" width={82} height={28} className="h-auto w-18 sm:w-19" />
          </Link>

          <p className="text-center text-[11px] font-normal leading-5 text-[#737984] sm:text-right sm:text-[12px]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </Container>
    </footer>
  );
}