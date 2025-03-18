import { Montserrat, Oi } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./_components/LayoutWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const oi = Oi({
  variable: "--font-oi",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "MetaVFest",
  description: "Biggest Anime Game Festival",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${oi.variable} antialiased relative h-screen overflow-y-auto bg-custom-pattern`}>
        <div className="relative z-10">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
