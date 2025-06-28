// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins", // optional, for using CSS variable
});

export const metadata = {
  title: "Salil Rajkarnikar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins text-[#343231] bg-[#f9f1f1]">
        {children}
      </body>
    </html>
  );
}
