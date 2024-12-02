"use client"
import { useState } from "react";
import Link from "next/link";
import { CiHome, CiPenpot, CiShoppingCart, CiLocationArrow1, CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {name: 'Home', href: '/home', icon: <CiHome size={20} className={`${isOpen ? "translate-x-0" : "translate-x-[9.76rem]"}`}/>},
    {name: 'Produtos', href: '/products', icon: <CiPenpot size={20} className={`${isOpen ? "translate-x-0" : "translate-x-[9.76rem]"}`}/>},
    {name: 'Carrinho', href: '/cart', icon: <CiShoppingCart size={20} className={`${isOpen ? "translate-x-0" : "translate-x-[9.76rem]"}`}/>},
    {name: 'Contato', href: '/contact', icon: <CiLocationArrow1 size={20} className={`${isOpen ? "translate-x-0" : "translate-x-[9.76rem]"}`}/>},
  ];

  const pathName = usePathname();

  return (
    <div>
        <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}
            onClick={() => setIsOpen(false)}
        />
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed top-4 left-4 z-50 p-2 rounded-md ${isOpen ? "bg-gray-700" : "bg-gray-700"} shadow-md text-white transition-transform duration-300 ${
            isOpen ? "translate-x-40" : "translate-x-0"
            }`}>
            {isOpen ? "X" : <CiMenuBurger size={20}/>}
        </button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 rounded-md text-white w-52 transform ${
          isOpen ? "translate-x-0" : "-translate-x-36"
        } transition-transform duration-300`}>

        <nav className="mt-16 space-y-1 px-2 flex flex-col">
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <Link href={link.href} key={link.href}>
                <div className={`rounded-md pl-1 h-8 gap-2 flex flex-row items-center ${isActive ? "bg-gray-700" : ""} hover:bg-gray-700`}>
                  {link.icon}{link.name}
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  );
}
