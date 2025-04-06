"use client";

import React from "react";
import Link from "next/link";

export default function Contato() {
  const whatsappNumber = "55SEUNUMERO"; // Substitua pelo seu número com DDD
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="max-w-2xl mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
      <p className="text-lg mb-4">Tem alguma dúvida ou quer fazer um pedido? Fale conosco pelo WhatsApp!</p>
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
      >
        📲 Fale pelo WhatsApp
      </a>

      <div className="mt-8">
        <p>Email: contato@blpersonalizados.com</p>
        <p>Telefone: (XX) XXXX-XXXX</p>
      </div>

      <Link href="/" className="mt-6 block text-blue-600 hover:underline">Voltar para a Home</Link>
    </div>
  );
}
