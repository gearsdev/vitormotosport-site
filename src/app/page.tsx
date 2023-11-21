import { CardProduct } from "@/components/CardProduct";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <Container>
          <div className="py-16 flex flex-col items-start gap-8">
            <h2 className="text-black text-3xl font-bold">Motos em destaque</h2>
            <div className="flex gap-4 w-full overflow-auto">
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 flex h-80">
        <Container className="h-full">
          <div className=" h-full flex flex-col items-center justify-center">
            <h2 className="text-black text-3xl font-bold mb-2">Qual moto é a sua cara?</h2>
            <p>Aqui você conta com vários modelos disponíveis a pronta entrega.</p>
            <button className="h-11 px-4 text-xl bg-red-600 text-white mt-6">Conferir todos os modelos</button>
          </div>
        </Container>
        <img src="section1.png" alt="" />
      </section>

      <section className="bg-white py-20">
        <Container className="h-full">
          <div className=" h-full flex flex-col items-center justify-center">
            <h2 className="text-black text-3xl font-bold mb-2">Qual moto é a sua cara?</h2>
            <p>Aqui você conta com vários modelos disponíveis a pronta entrega.</p>
            <button className="h-11 px-4 text-xl border-red-600 border text-red-600 mt-6">Conferir todos os modelos</button>
          </div>
        </Container>
      </section>

      <section className="bg-gray-100 flex h-80">
        <img src="section2.png" alt="" />
        <Container className="h-full">
          <div className=" h-full flex flex-col items-center justify-center">
            <h2 className="text-black text-3xl font-bold mb-2">Qual moto é a sua cara?</h2>
            <p>Aqui você conta com vários modelos disponíveis a pronta entrega.</p>
            <button className="h-11 px-4 text-xl bg-red-600 text-white mt-6">Conferir todos os modelos</button>
          </div>
        </Container>
      </section>
    </>
  )
}
