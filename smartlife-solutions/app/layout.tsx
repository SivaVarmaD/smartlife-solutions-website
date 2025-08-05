import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SmartLife Solutions - Home Automation Company in Hyderabad",
  description: "Leading home automation company in Hyderabad. Transform your home with smart technology solutions from SmartLife Solutions Pvt. Ltd.",
  keywords: "home automation, smart home, Hyderabad, IoT, smart technology, home security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lora.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
