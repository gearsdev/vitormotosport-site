import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";

export function Header() {
  return (
    <header className="h-[100px] w-full bg-black text-white">
      <Container>
        <div className="h-full w-full flex justify-between items-center">
          <Link href="/">
            <Image src="logos/logo.svg" alt="Logo" height={96} width={96} />
          </Link>
          <nav>
            <ul className="flex gap-12">
              <li className="hover:text-gray-300 hover:border-b-2 hover:border-yellow-500">
                <Link href="/">HOME</Link>
              </li>
              <li className="hover:text-gray-300 hover:border-b-2 hover:border-yellow-500">
                <Link href="/about">QUEM SOMOS</Link>
              </li>
              <li className="hover:text-gray-300 hover:border-b-2 hover:border-yellow-500">
                <Link href="/vehicles">MOTOS</Link>
              </li>
              <li className="hover:text-gray-300 hover:border-b-2 hover:border-yellow-500">
                <Link href="/about">CONTATO</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
