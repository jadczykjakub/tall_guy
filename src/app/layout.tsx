import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import { Providers } from "@components/Providers";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tallguyjj.com"),
  title: {
    default: "Tallguy Jakub Jadczyk coding enthusiast",
    template: "%s - Tallguy Jakub Jadczyk coding enthusiast",
  },
  description: "Come and read my articles",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-24">
      <body className={font.className}>
        <Providers>
          <div className="mx-auto max-w-10xl flex flex-col gap-4 md:gap-16 min-h-screen">
            <Navigation />
            <div className="my-4 px-4 md:px8 max-w-7xl mx-auto">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
