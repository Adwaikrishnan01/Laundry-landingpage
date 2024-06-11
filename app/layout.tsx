import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Cleanease",
  description: "Effortless laundry solutions at your fingertips. Schedule, track, and enjoy fresh, clean clothes with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
