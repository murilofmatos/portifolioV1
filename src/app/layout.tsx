import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murilo's Portfolio",
  description: `Portfólio criado para divulgar o trabalho de 
  Murilo Francisco matos para o Mundo`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
