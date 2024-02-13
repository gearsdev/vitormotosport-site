"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = usePathname();

  const menuItems = [
    { name: "PÁGINA INICIAL", href: "/" },
    { name: "QUEM SOMOS", href: "/contact" },
    { name: "MOTOS", href: "/vehicles" },
    { name: "CONTATO", href: "/contact" },
  ];

  useEffect(() => {
    setNavbarOpen(false);
  }, [location]);

  return (
    <header className="h-[100px] w-full bg-black text-white">
      <Container>
        <div className="h-full w-full flex justify-between items-center">
          <Link href="/">
            <Image src="/logos/logo.svg" alt="Logo" height={96} width={96} />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-12">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="w-full h-full py-1 hover:border-b-2 hover:border-yellow-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setNavbarOpen((prev) => !prev)}
            type="button"
            className="
              md:hidden
              inline-flex
              items-center
              justify-center
              p-2
              w-10
              h-10
              text-sm
              text-zinc-500
              rounded-lg
              hover:bg-zinc-100
              dark:text-zinc-400
              dark:hover:bg-zinc-700
              dark:focus:ring-zinc-600"
          >
            {navbarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {navbarOpen && (
            <div className="absolute inset-0 mt-[100px]" id="navbar-hamburger">
              <ul className="flex flex-col font-medium bg-zinc-900">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="w-full block min-w-full px-4 py-5 hover:bg-yellow-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
