import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { FC } from "react";
import Navbar from "./components/layout/navbar";

const EBGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-eb-garamond",
  display: "auto",
});

// const FjordOne = Fjord_One({
//   weight: ["400"],
//   subsets: ["latin"],
//   variable: "--font-fjord-one",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: `Kaspers`,
  description:
    "Kaspers is a construction company based in the Tammisaari, Finland.",
  icons: {
    icon: "/icon.png",
  },
};

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html className={`${EBGaramond.className}`} lang="en">
      <body className="bg-beige" suppressHydrationWarning>
        <Navbar />
        <main className="flex min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex-col items-center justify-center px-4 md:px-8 bg-black">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
