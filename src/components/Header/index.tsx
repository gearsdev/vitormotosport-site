import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";

export function Header() {
  return (
    <header className="h-[100px] w-full bg-black text-white">
      <Container>
        <div className="h-full w-full flex justify-between items-center">
          <Image src="logos/logo.svg" alt="Logo" height={96} width={96} />
          <nav>
            <ul className="flex gap-12">
              <li><Link href="/">Página inicial</Link></li>
              <li><Link href="/about">Quem somos</Link></li>
              <li><Link href="/vehicles">Motos</Link></li>
              <li><Link href="/about">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}