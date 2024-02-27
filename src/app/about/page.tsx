"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section>
        <img
          className="w-full h-80 object-cover object-top"
          src="/imgs/section1.png"
          alt="Banner de moto"
        />
      </section>
      <section>
        <Container className="py-16">
          <Title className="mb-8">QUEM SOMOS?</Title>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <Image
              src={"/imgs/section2.png"}
              alt={""}
              width={550}
              height={550}
            />
            <div className="md:w-2/4">
              <p>
                A Vitor Motosport de Barra Bonita, fundada em 2023 e inaugurada
                em 2024, é uma concessionária especializada que oferece uma
                variedade de motos, desde modelos para o dia a dia até motos
                esportivas e clássicas com cilindradas de até 1800 cc.
              </p>

              <br />
              <p>
                Destacando-se pela maior boutique na região, a loja oferece
                vestuário, acessórios e produtos originais de marcas renomadas.
                Com uma equipe dedicada e oficina multimarcas, a Vitor Motosport
                proporciona uma experiência completa para os entusiastas de
                motocicletas.
              </p>
              <br />
              <p>
                Venha conhecer a Vitor Motosport, onde a paixão por motos se
                encontra com uma seleção diversificada, uma boutique exclusiva e
                serviços de alta qualidade. Estamos aqui para recebê-lo, tomar
                um café juntos e proporcionar a você a oportunidade de fazer um
                ótimo negócio. Sua jornada com a Vitor Motosport começa agora.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-gray-100" id="contact">
        <Container className="py-16">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <Title className="mb-8">FALE CONOSCO</Title>
                <p>
                  Para outras informações, dúvidas e orçamentos, entre em
                  contato pelo WhatsApp ou pelo telefone a baixo.
                </p>
                <div className="flex flex-col gap-4 w-full md:w-96 self-center mt-8">
                  <a
                    href="https://wa.me/5514997171882"
                    className="w-full"
                    target="_blank"
                  >
                    <Button className="!bg-green-700 hover:!bg-green-800 !w-full">
                      <Image
                        src="/icons/whatsapp.svg"
                        alt="WhatsApp"
                        height={24}
                        width={24}
                      />
                      Entrar em contato
                    </Button>
                  </a>
                  <a href="tel:+5514997171882" className="w-full">
                    <Button className="!w-full">
                      <Phone />
                      (14) 99717-1882
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <Title className="mb-8">VENHA NOS CONHECER</Title>
                <p>
                  Rua Geraldo Fazzio, 1028 - Distrito Industrial I, Barra Bonita
                  - SP, 17340-000
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6626004541977!2d-48.56909812391479!3d-22.479309922734995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c74f857b79b0f7%3A0xd8ac14b08f77b61c!2sRua%20Geraldo%20Fazzio%2C%201028%20-%20Distrito%20Industrial%20I%2C%20Barra%20Bonita%20-%20SP%2C%2017340-000!5e0!3m2!1spt-BR!2sbr!4v1707855057863!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
