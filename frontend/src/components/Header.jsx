import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white">
      {/* Top bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 text-sm">
        <div className="flex space-x-4">
          <a href="#">Seller Centre</a>
          <a href="#">Mulai Berjualan</a>
          <a href="#">Download</a>
          <a href="#">Ikuti kami</a>
        </div>
        <div className="flex space-x-4">
          <a href="#">Notifikasi</a>
          <a href="#">Bantuan</a>
          <a href="#">Bahasa Indonesia ▾</a>
          <a href="#">Daftar</a>
          <a href="#">Log In</a>
        </div>
      </div>

      {/* Main header */}
      <div className="gap-12 flex items-center px-6 py-4 justify-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold mr-4">VapeStore</h1>

        {/* Search bar */}
        <div className="flex flex-1 w-auto">
          <input
            type="text"
            placeholder="Cari Vape, Liquid, Aksesoris..."
            className="bg-amber-50 w-full px-3 py-2 rounded-l-lg text-black text-sm md:text-base"
          />
          <button className="bg-purple-600 px-4 rounded-r-lg">🔍</button>
        </div>

        {/* Cart & Mobile menu button */}
        <div className=" flex items-center ml-4 space-x-4">
          <a href="#"> <img className="w-8 h-8 mr-4" src="src/assets/cart-icon.svg" alt="Cart" /></a>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Category links */}
      <div className="hidden md:flex space-x-6 px-6 py-2 text-sm text-gray-300">
        <a href="#">Pod System</a>
        <a href="#">Mod & RDA</a>
        <a href="#">Liquid Premium</a>
        <a href="#">Coil & Cotton</a>
        <a href="#">Aksesoris Vape</a>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-3 space-y-2 text-sm">
          <a href="#" className="block">Pod System</a>
          <a href="#" className="block">Mod & RDA</a>
          <a href="#" className="block">Liquid Premium</a>
          <a href="#" className="block">Coil & Cotton</a>
          <a href="#" className="block">Aksesoris Vape</a>
        </div>
      )}
    </header>
  );
}
