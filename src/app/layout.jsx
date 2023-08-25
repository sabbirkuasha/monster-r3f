import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Monster 3d",
  description: "Creating monster with react three fiber",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
