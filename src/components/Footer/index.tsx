"use client";

import Image from "next/image";

export function Footer() {
  const handleWhatsappClick = () => {
    const numeroTelefone = "+5514997171882";
    const urlWhatsapp = `https://wa.me/${numeroTelefone}`;

    window.open(urlWhatsapp, "_blank");
  };

  return (
    <footer className="py-20 bg-black flex flex-wrap items-start justify-center">
      <div className="hidden lg:block mr-16">
        <Image src="/logos/logo.svg" alt="Logo" height={192} width={192} />
      </div>
      <div className="flex flex-col md:flex-row items-start ml-4 md:ml-0 mt-4 md:mt-0">
        <div className="flex flex-col flex-wrap md:mr-8 mt-8">
          <h3 className="text-white font-bold mb-4">REDES SOCIAIS</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://www.instagram.com/vitor_motosport/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                height={32}
                width={32}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-wrap md:ml-8 mt-8">
          <h3 className="text-white font-bold mb-4">CONTATO</h3>

          <div className="mt-4 md:mt-0 flex flex-wrap">
            <Image
              src="/icons/map-icon.png"
              alt="Mapa"
              height={24}
              width={24}
            />
            <p className="text-white text-sm ml-4">
              Geraldo Fazzio, nº 1028 - Barra Bonita - SP
            </p>
          </div>

          <div className="mt-4 md:mt-8 flex flex-wrap">
            <Image
              src="/icons/whatsapp-icon.png"
              alt="Whatsapp"
              height={24}
              width={24}
            />
            <a
              className="text-white text-sm underline cursor-pointer hover:text-blue-100 ml-4"
              onClick={handleWhatsappClick}
            >
              +55 14 997171882
            </a>
          </div>

          <div className="mt-4 md:mt-8 flex flex-wrap">
            <Image
              src="/icons/email-icon.png"
              alt="Email"
              height={24}
              width={24}
            />
            <a
              href="mailto:vitormotosport@gmail.com"
              className="text-white text-sm underline cursor-pointer hover:text-blue-100 ml-4"
            >
              vitormotosport@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
