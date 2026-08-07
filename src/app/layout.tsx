import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABTalks - 60-Day Coding Challenge",
  description: "Build consistency. Get visible to recruiters. Join 4,000+ Indian college students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f0f4f8]">
        <div className="mx-auto max-w-[430px] min-h-screen bg-[#f0f4f8] relative shadow-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}