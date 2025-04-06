"use client";

import React from "react";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="max-w-3xl mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
      <p className="text-lg mb-4">
        A <strong>BLPersonalizados</strong> é uma papelaria especializada em produtos personalizados,
        criados com carinho para tornar o seu dia a dia mais especial. 
      </p>
      <p className="text-lg mb-4">
        Nossa missão é oferecer itens exclusivos, de alta qualidade, que atendam às suas necessidades 
        e reflitam a sua personalidade. Desde planners e cadernos até etiquetas personalizadas, 
        cada detalhe é pensado para proporcionar a melhor experiência para você.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Por que escolher a BLPersonalizados?</h2>
      <ul className="list-disc list-inside text-left mx-auto max-w-lg">
        <li className="text-lg mb-2">🎨 Designs exclusivos e personalizados</li>
        <li className="text-lg mb-2">📦 Produção e envio rápidos</li>
        <li className="text-lg mb-2">💖 Feito com carinho para você</li>
      </ul>

      <Link href="/" className="mt-6 block text-blue-600 hover:underline">Voltar para a Home</Link>
    </div>
  );
}
