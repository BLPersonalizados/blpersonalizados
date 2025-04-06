import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart, MessageSquare, Settings, Mail, Info } from "lucide-react";
import Image from "next/image";

const initialProducts = [
  { id: 1, name: "Caderno Universitário", price: 15.99 },
  { id: 2, name: "Caneta Azul", price: 2.5 },
  { id: 3, name: "Lápis de Cor", price: 12.0 },
];

export default function Papelaria() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [adminMode, setAdminMode] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de comprar os seguintes itens:\n` +
      cart.map((item) => `- ${item.name} (R$ ${item.price.toFixed(2)})`).join("\n") +
      `\n\nTotal: R$ ${getTotal()}`
    );
    return `https://wa.me/5599999999999?text=${message}`;
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([
        ...products,
        { id: products.length + 1, name: newProduct.name, price: parseFloat(newProduct.price) },
      ]);
      setNewProduct({ name: "", price: "" });
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans bg-white text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-blpersonalizados.png"
            alt="Logo BLPersonalizados"
            width={50}
            height={50}
          />
          <h1 className="text-3xl font-bold text-purple-700">BLPersonalizados</h1>
        </div>
        <Button onClick={() => setAdminMode(!adminMode)} className="flex gap-2 bg-yellow-400 text-black hover:bg-yellow-500">
          <Settings size={18} /> {adminMode ? "Sair do Admin" : "Painel Admin"}
        </Button>
      </div>

      {adminMode ? (
        <div className="border p-4 rounded-xl shadow-md bg-gray-50">
          <h2 className="text-xl font-bold mb-4 text-purple-700">Adicionar Novo Produto</h2>
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="Nome do produto"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder="Preço"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Button onClick={handleAddProduct} className="bg-purple-600 text-white hover:bg-purple-700">Adicionar</Button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold text-purple-800">{product.name}</h2>
                  <p className="text-sm text-gray-600">R$ {product.price.toFixed(2)}</p>
                  <Button className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => addToCart(product)}>
                    Adicionar ao Carrinho
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="mt-6 p-4 border rounded-xl shadow-md bg-white">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-purple-800">
                <ShoppingCart size={20} /> Carrinho
              </h2>
              <ul className="mb-2">
                {cart.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item.name} - R$ {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="font-semibold">Total: R$ {getTotal()}</p>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
              >
                <MessageSquare size={18} /> Finalizar Compra no WhatsApp
              </a>
            </div>
          )}

          <div className="mt-10 space-y-6">
            <section className="border rounded-xl p-4 bg-gray-50 shadow-sm">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-purple-800">
                <Info size={20} /> Sobre Nós
              </h2>
              <p className="text-sm text-gray-700">
                A <strong>BLPersonalizados</strong> nasceu da paixão por papelaria criativa e itens personalizados. Oferecemos produtos únicos com muito carinho e qualidade para deixar seus estudos, organização ou presente ainda mais especiais.
              </p>
            </section>

            <section className="border rounded-xl p-4 bg-gray-50 shadow-sm">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-purple-800">
                <Mail size={20} /> Contato
              </h2>
              <p className="text-sm text-gray-700 mb-2">Entre em contato conosco pelos canais abaixo:</p>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>Email: contato@blpersonalizados.com</li>
                <li>WhatsApp: <a className="text-green-600 underline" href="https://wa.me/5599999999999" target="_blank">(99) 99999-9999</a></li>
                <li>Instagram: <a className="text-purple-600 underline" href="#">@blpersonalizados</a></li>
              </ul>
            </section>
          </div>
        </>
      )}
    </div>
  );
}
