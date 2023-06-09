import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "CV - Vu Xuan Hoang",
  description: "CV of  Vu Xuan Hoang",
};

const inter = Inter({ subsets: ["latin"] });

export default async function CV({ children }: any) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
