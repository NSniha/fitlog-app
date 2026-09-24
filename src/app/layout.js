import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FitLogProvider } from "@/context/FitLogContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "FitLog | Workout Library",
  description: "Train with intent, build your workout plan, and log every set with FitLog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} flex min-h-screen flex-col bg-[#0b0d10] text-white antialiased`}>
        <FitLogProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}