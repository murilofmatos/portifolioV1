import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-100% h-screen flex flex-col relative bg-amber-50">
      {children}
    </div>
  );
}
