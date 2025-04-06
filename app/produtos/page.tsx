"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Importa o carrossel dinamicamente (evita erro no Next.js SSR)
const Carousel = dynamic(
  async () => {
    const mod = await import("react-responsive-carousel");
    return mod?.Carousel || (() => <div>Erro ao carregar o carrossel</div>);
  },
  { ssr: false }
);

export default function Produtos() {
  // Garante que o CSS do carrossel seja carregado corretamente
  useEffect(() => {
    import("react-responsive-carousel/lib/styles/carousel.min.css").catch((err) =>
      console.error("Erro ao carregar estilos do carrossel:", err)
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Nossos Produtos</h1>

      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <Image src="/images/caderno.jpg" alt="Caderno Personalizado" width={600} height={400} />
        </div>
        <div>
          <Image src="/images/planner.jpg" alt="Planner Personalizado" width={600} height={400} />
        </div>
        <div>
          <Image src="/images/etiquetas.jpg" alt="Etiquetas Personalizadas" width={600} height={400} />
        </div>
      </Carousel>
    </div>
  );
}
