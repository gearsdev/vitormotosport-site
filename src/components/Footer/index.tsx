"use client";

import Image from "next/image";
import { Container } from "../Container";
import { Facebook, Instagram, Mail, Pin } from "lucide-react";

export function Footer() {
  const handleWhatsappClick = () => {
    const numeroTelefone = "+5514997171882";
    const urlWhatsapp = `https://wa.me/${numeroTelefone}`;

    window.open(urlWhatsapp, "_blank");
  };

  return (
    <footer className="py-20 bg-black">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <Image src="/logos/logo.svg" alt="Logo" height={192} width={192} />
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
                  <a
                    className="text-white text-sm underline cursor-pointer hover:text-blue-100 ml-4"
                    onClick={handleWhatsappClick}
                  >
                    +55 14 9 9717-1882
                  </a>
                </div>
                <div className="flex">
                  <Mail color="white" size={24} />
                  <a
                    href="mailto:vitormotosport@gmail.com"
                    className="text-white text-sm underline cursor-pointer hover:text-blue-100 ml-4"
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
