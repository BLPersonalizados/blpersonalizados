"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Carousel = dynamic(
  async () => {
    const mod = await import("react-responsive-carousel");
    return mod?.Carousel || (() => <div>Erro ao carregar o carrossel</div>);
  },
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    import("react-responsive-carousel/lib/styles/carousel.min.css").catch((err) =>
      console.error("Erro ao carregar estilos do carrossel:", err)
    );
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <header className="text-center p-20 bg-gradient-to-b from-gray-100 to-white text-gray-900">
        <h1 className="text-6xl font-extrabold tracking-wide">BLPersonalizados</h1>
        <p className="text-xl mt-4 text-gray-600">Papelaria personalizada com elegância e sofisticação</p>
      </header>

      <section className="max-w-7xl mx-auto py-16 px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">Nossos Produtos</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop className="shadow-xl rounded-xl overflow-hidden">
          <div>
            <Image src="/images/caderno.jpg" alt="Caderno Personalizado" width={800} height={500} className="rounded-xl" />
          </div>
          <div>
            <Image src="/images/planner.jpg" alt="Planner Personalizado" width={800} height={500} className="rounded-xl" />
          </div>
          <div>
            <Image src="/images/etiquetas.jpg" alt="Etiquetas Personalizadas" width={800} height={500} className="rounded-xl" />
          </div>
        </Carousel>
      </section>

      <footer className="text-center p-8 bg-gray-900 text-white mt-16">
        <p>&copy; {new Date().getFullYear()} BLPersonalizados - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg p-6 flex justify-center space-x-10 text-lg font-medium text-gray-700">
      <Link href="/" className="hover:text-gray-900 transition font-semibold">Início</Link>
      <Link href="/produtos" className="hover:text-gray-900 transition font-semibold">Produtos</Link>
      <Link href="/sobre" className="hover:text-gray-900 transition font-semibold">Sobre</Link>
      <Link href="/contato" className="hover:text-gray-900 transition font-semibold">Contato</Link>
    </nav>
  );
}
