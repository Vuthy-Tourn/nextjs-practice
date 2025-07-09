import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import localFont from "next/font/local";
import NavbarWrapper from "@/components/header/NavbarWrapper";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const ubuntu = Ubuntu({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const myFont = localFont({
  src: "../../public/fonts/Howdybun.otf",
  variable: "--font-howdybun",
  display: "swap",
});
export const khmerFont = localFont({
  src: "../../public/fonts/Moul-Regular.ttf",
  variable: "--font-khmer",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Home",
  description: "Learning Nextjs with Me",
  openGraph: {
    title: "Home",
    description: "Learning Nextjs with Me",
    siteName: "Next.js app Testing",
    images:
      "https://miro.medium.com/v2/resize:fit:1400/1*fHiEbeTOkiapbseENxSMCw.png",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${ubuntu.variable} ${khmerFont.variable} antialiased`}>
        <ErrorBoundary errorComponent={Error}>
          <NavbarWrapper />
          <Suspense fallback={<Loading />}>
            {modal}
            {children}
          </Suspense>
        </ErrorBoundary>
        {/* <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script> */}
      </body>
    </html>
  );
}
