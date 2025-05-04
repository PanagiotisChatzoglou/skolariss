import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { connectDB } from "@/service/mongo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skolaris | Education",
  description: "Reimagining education for the digital age",
};

const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export default async function RootLayout({ children }) {
  const conn = await connectDB();
  // console.log(conn);

  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased, poppins.variable`
        )}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
