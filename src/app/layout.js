import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeCompo from "./components/theme/ThemeCompo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bangladesh Counsel for Career Excellence",
  description:
    "Boost your career with expert-led courses tailored for success in Bangladesh. Discover skills that employers value, advance professionally, and unlock new opportunities with our career development programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ThemeCompo></ThemeCompo>
      </body>
    </html>
  );
}
