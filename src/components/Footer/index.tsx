import Image from "next/image";
import { Title } from "../Title";

export function Footer() {
  return (
    <footer className="py-20 bg-black flex flex-col items-center justify-center">
      <Image src="logos/logo.svg" alt="Logo" height={192} width={192} />
      <Title className="text-white">Siga nas redes sociais</Title>
    </footer>
  )
}