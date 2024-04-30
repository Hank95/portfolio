import { GeistSans } from "geist/font/sans";
import { Arimo } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={arimo.variable + libre_franklin.variable}>
        {children}
      </body>
    </html>
  );
}
