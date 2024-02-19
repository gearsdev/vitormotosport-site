/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FavoritedProducts } from "@/components/FavoritedProducts";
import { Title } from "@/components/Title";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="bg-[#0E0F0D]">
        <Container className="!px-0">
          <img src="imgs/banner.png" alt="" />
        </Container>
      </section>
      <FavoritedProducts />
      <section className="bg-gray-100 flex flex-col xl:flex-row xl:h-96">
        <Container className="h-full">
          <div className="h-full flex flex-col items-center py-20">
            <Title>Qual moto é a sua cara?</Title>
            <p className="mt-8 text-center">
              Aqui você conta com vários modelos disponíveis a <br /> pronta
              entrega.
            </p>
            <Link href="/vehicles" className="mt-8 w-full md:w-auto">
              <Button >Conferir todos os modelos</Button>
            </Link>
          </div>
        </Container>
        <img src="imgs/section1.png" alt="" />
      </section>
      <section className="bg-white">
        <Container className="h-full">
          <div className="h-full flex flex-col items-center py-20">
            <Title className="text-center">
              Venda sua moto pelo melhor preço
            </Title>
            <p className="mt-8 text-center">
              Excelência em serviço de revenda, fácil e sem <br /> burocracia!
            </p>
            <a href="https://wa.me/5514997171882" target="_blank" className="w-full md:w-auto">
              <Button className="mt-8" variant="outline">
                Entrar em contato pelo WhatsApp
              </Button>
            </a>
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 flex flex-col xl:flex-row xl:h-96">
        <img src="imgs/section2.png" alt="" className="h-96 object-cover" />
        <Container className="h-full">
          <div className="h-full flex flex-col items-center py-20">
            <Title>Vamos tomar um café?</Title>
            <p className="mt-8 text-center">
              Aqui você conta com vários modelos disponíveis a <br /> pronta
              entrega. Vamos tomar um café?
            </p>
            <Link href="/vehicles" className="mt-8 w-full md:w-auto">
              <Button >Conferir todos os modelos</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
