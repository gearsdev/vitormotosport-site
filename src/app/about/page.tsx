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
            <div className="md:w-2/4 space-y-4">
              <p>
                Tudo começou com um sonho que, naquele momento, parecia
                impossível de realizar. O sonho ganhou vida quando Vitor decidiu
                arriscar e dar o primeiro passo em 2020. Ele realizou sua
                primeira venda com sua moto particular, usando os ganhos para
                adquirir três motos e iniciar seu empreendimento.
              </p>
              <p>
                As vendas começaram na oficina de funilaria artesanal de seu
                pai, João, que sempre foi seu alicerce e incentivo para evoluir.
                Com o apoio dele, o sonho começou a se tornar realidade, e as
                vendas fluíram, aumentando o número de motos disponíveis.
              </p>
              <p>
                Em 2022, começamos a construir nossa loja com determinação e a
                vontade de vê-la concluída. A cada tijolo colocado, sentimos a
                alegria e a ansiedade pelo futuro crescendo.
              </p>
              <p>
                Finalmente, em 03/02/2024, celebramos a inauguração da loja. Uma
                empresa familiar onde os colaboradores são: Vitor, Tais (irmã),
                João (pai) e Alessandra (mãe). Nossa missão é fornecer sempre
                motos de qualidade e procedência para satisfazer e fidelizar
                nossos clientes.
              </p>
              <p>
                Na <strong>VITOR MOTOSPORT</strong>, acreditamos que um{' '}
                <strong>cliente satisfeito é a nossa satisfação.</strong>{' '}
                Estamos aqui para tornar seus sonhos de pilotar uma moto de
                qualidade uma realidade. Venha fazer parte da nossa história!
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
                  - SP, 17342-580
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
