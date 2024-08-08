import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";
import Pintrest from '@/app/pintrest/page';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
  variable: "--font-poppins", // for custome CSS property - you can see it in Developers tool
});

// SEO
export const metadata: Metadata = {
  title: "Issue Tracker",
  description: " Yegetaneh Issue tracker ",
  // openGraph - used when we share our web to social medias
  openGraph: {
    title: "Yegetaneh Blog",
    description: "Get into Yegetaneh's Blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          {/* <NavBar />
          <main className="p-5">{children}</main> */}
          <Pintrest />
        </Theme>
      </body>
    </html>
  );
}
