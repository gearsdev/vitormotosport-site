import { Title } from "../Title";

export function Footer() {
  return (
    <footer className="py-20 bg-black flex flex-col items-center justify-center">
      <img src="logo.svg" alt="" className="h-48" />
      <Title className="text-white">Siga nas redes sociais</Title>
    </footer>
  )
}