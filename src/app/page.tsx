/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/Button";
import { CardProduct } from "@/components/CardProduct";
import { Container } from "@/components/Container";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <>
      <section className="bg-dark-gray">
        <Container>
          <img src="imgs/banner.png" alt="" />
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <Title className="mb-8">Motos em destaque</Title>
          <div className="flex gap-4 w-full overflow-auto">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 flex h-80">
        <Container className="h-full">
          <div className=" h-full flex flex-col items-start justify-center">
            <Title>Qual moto é a sua cara?</Title>
            <p className="mt-8">
              Aqui você conta com vários modelos disponíveis a <br /> pronta
              entrega.
            </p>
            <Button className="mt-8 bg-yellow-500">
              Conferir todos os modelos
            </Button>
          </div>
        </Container>
        <img src="imgs/section1.png" alt="" />
      </section>
      <section className="bg-white py-20">
        <Container className="h-full">
          <div className=" h-full flex flex-col items-center justify-center">
            <Title>Venda sua moto pelo melhor preço</Title>
            <p className="mt-8 text-center">
              Excelência em serviço de revenda, fácil e sem <br /> burocracia!
            </p>
            <Button className="mt-8" variant="outline">
              Entrar em contato pelo WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-gray-100 flex h-80">
        <img src="imgs/section2.png" alt="" />
        <Container className="h-full">
          <div className=" h-full flex flex-col items-start justify-center">
            <Title>Vamos tomar um café?</Title>
            <p className="mt-8 ">
              Aqui você conta com vários modelos disponíveis a <br /> pronta
              entrega. Vamos tomar um café?
            </p>
            <Button className="mt-8">Conferir todos os modelos</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
