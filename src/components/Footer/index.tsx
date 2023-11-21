import Image from "next/image";
import { Title } from "../Title";

export function Footer() {
  return (
    <footer className="py-20 bg-black flex flex-col items-center justify-center">
      <Image src="logos/logo.svg" alt="Logo" height={192} width={192} />
      <Title className="text-white">Siga nas redes sociais</Title>
      <div className="flex gap-8 mt-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Image src="icons/facebook.svg" alt="Facebook" height={32} width={32} />
        </a>
        <a href="https://www.instagram.com/vitor_motosport/" target="_blank" rel="noopener noreferrer">
          <Image src="icons/instagram.svg" alt="Instagram" height={32} width={32} />
        </a>
      </div>
    </footer>
  )
}
