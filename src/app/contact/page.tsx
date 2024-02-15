"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="bg-[#0E0F0D]">
        <img src="imgs/section1.png" alt="Banner de moto" />
      </section>

      <Container className="py-16">
        <Title className="mb-8">QUEM SOMOS?</Title>
        <div className="flex flex-row flex-wrap justify-between items-start">
          <div className="w-2/4">
            <p>
              A Vitor Motosport de Barra Bonita, fundada em 2023 e inaugurada em
              2024, é uma concessionária especializada que oferece uma variedade
              de motos, desde modelos para o dia a dia até motos esportivas e
              clássicas com cilindradas de até 1800 cc.
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
              serviços de alta qualidade. Estamos aqui para recebê-lo, tomar um
              café juntos e proporcionar a você a oportunidade de fazer um ótimo
              negócio. Sua jornada com a Vitor Motosport começa agora.
            </p>
          </div>
          <Image src={"/imgs/section2.png"} alt={""} width={550} height={550} />
        </div>
        <div className="mt-8 border border-slate-900"></div>
      </Container>

      <Container className="py-16">
        <Title className="mb-8">FALE CONOSCO</Title>
        <div className="flex flex-row flex-wrap justify-between items-start">
          <form className="flex flex-col w-2/5">
            <p>
              Para outras informações, dúvidas e orçamentos, utilize o
              formulário abaixo ou qualquer outro de nossos canais de
              atendimento. <br /> Sua mensagem será entregue com sucesso.
            </p>
            <div className="mb-4 flex flex-col mt-8">
              <label htmlFor="nome" className="text-gray-600 mb-2 text-sm">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Vitor Motosport"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="text-gray-600 mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="vitormotosport@gmail.com"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="telefone" className="text-gray-600 mb-2 text-sm">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="14 99717-1882"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="mensagem" className="text-gray-600 mb-2 text-sm">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Olá! Me chamo Vitor Motosport e gostaria de saber..."
                rows={1}
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
              ></textarea>
            </div>
            <Button className="mt-8">Enviar</Button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6626004541977!2d-48.56909812391479!3d-22.479309922734995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c74f857b79b0f7%3A0xd8ac14b08f77b61c!2sRua%20Geraldo%20Fazzio%2C%201028%20-%20Distrito%20Industrial%20I%2C%20Barra%20Bonita%20-%20SP%2C%2017340-000!5e0!3m2!1spt-BR!2sbr!4v1707855057863!5m2!1spt-BR!2sbr"
            width="50%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </>
  );
}
