import { Button } from "@/components/Button";
import { CardProduct } from "@/components/CardProduct";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <>
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
          <div className=" h-full flex flex-col items-center justify-center">
            <Title>Qual moto é a sua cara?</Title>
            <p>Aqui você conta com vários modelos disponíveis a pronta entrega.</p>
            <Button className="mt-8">Conferir todos os modelos</Button>
          </div>
        </Container>
        <img src="imgs/section1.png" alt="" />
      </section>
      <section className="bg-white py-20">
        <Container className="h-full">
          <div className=" h-full flex flex-col items-center justify-center">
            <Title>Qual moto é a sua cara?</Title>
            <p>Aqui você conta com vários modelos disponíveis a pronta entrega.</p>
            <Button className="mt-8" variant="outline">Conferir todos os modelos</Button>
          </div>
        </Container>
      </section>

      <section className="bg-gray-100 flex h-80">
        <img src="imgs/section2.png" alt="" />
        <Container className="h-full">
          <div className=" h-full flex flex-col items-center justify-center">
            <Title>Qual moto é a sua cara?</Title>
            <p>Aqui você conta com vários modelos disponíveis a pronta entrega.</p>
            <Button className="mt-8">Conferir todos os modelos</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
