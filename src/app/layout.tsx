import type { Metadata } from "next";
import "./globals.css";
import Input from "./components/input";
import SideBar from "./components/sideBar";
import CartButton from "./components/cartButton";

export const metadata: Metadata = {
  title: {
    absolute: 'e-commerce',
    default: '',
    template: 'sa | KevenDev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className="bg-gray-700  flex justify-center items-center h-10 p-8">
        <Input/>
      </header>
      <CartButton/>
      <SideBar/>
        {children}
      </body>
    </html>
  );
}
