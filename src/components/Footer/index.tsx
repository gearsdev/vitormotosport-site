"use client";

import Image from "next/image";
import { Container } from "../Container";
import { Facebook, Instagram, Mail, Pin } from "lucide-react";

export function Footer() {
  return (
    <footer className="lg:h-72 h-[500px] bg-black">
      <Container className="!flex">
        <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-4">
          <div className="mb-4 lg:mb-0 flex flex-col items-center justify-center gap-4">
            <Image src="/logos/logo.svg" alt="Logo" height={192} width={192} />
            <span className="text-zinc-100 font-light">Cliente satisfeito é a nossa satisfação</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:items-start">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-white font-bold">REDES SOCIAIS</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook color="white" size={32} />
                </a>
                <a
                  href="https://www.instagram.com/vitor_motosport/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram color="white" size={32} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h3 className="text-white font-bold">CONTATO</h3>
              <div className="flex flex-col items-start gap-2">
                <div className="flex">
                  <Pin color="white" size={24} />
                  <p className="text-white text-sm ml-4">
                    Geraldo Fazzio, nº 1028 - Barra Bonita - SP
                  </p>
                </div>
                <div className="flex">
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="Whatsapp"
                    height={24}
                    width={24}
                  />
                  <div className="flex flex-col">
                    <a
                      className="text-white text-sm cursor-pointer hover:text-zinc-300 ml-4"
                      href="https://wa.me/5514997171882"
                      target="_blank"
                    >
                      <b>Vitor</b> - (14) 99717-1882
                    </a>
                    <a
                      className="text-white text-sm cursor-pointer hover:text-zinc-300 ml-4"
                      href="https://wa.me/5514997131098"
                      target="_blank"
                    >
                      <b>Tais</b> - (14) 99713-1098
                    </a>
                    <a
                      className="text-white text-sm cursor-pointer hover:text-zinc-300 ml-4"
                      href="https://wa.me/5514998574608"
                      target="_blank"
                    >
                      <b>Caio</b> - (14) 99857-4608
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <Mail color="white" size={24} />
                  <a
                    href="mailto:vitormotosport@gmail.com"
                    className="text-white text-sm cursor-pointer hover:text-zinc-300 ml-4"
                  >
                    vitormotosport@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
