import { Inter } from "next/font/google";
import "antd/dist/antd.css";
import "./globals.css";
import "@/assets/customStyle/cv.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hvxun - Vũ Xuân Hoàng",
  description: "Website blog of hvxun - Vũ Xuân Hoàng",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
