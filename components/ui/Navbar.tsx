function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between px-8 text-lg font-medium">
      <Link href="/">
        <Image src="/images/logo.png" alt="BLPersonalizados" width={120} height={50} />
      </Link>
      <div className="flex space-x-8">
        <Link href="/" className="hover:text-gray-500 transition">Início</Link>
        <Link href="/produtos" className="hover:text-gray-500 transition">Produtos</Link>
        <Link href="/sobre" className="hover:text-gray-500 transition">Sobre</Link>
        <Link href="/contato" className="hover:text-gray-500 transition">Contato</Link>
      </div>
    </nav>
  );
}
