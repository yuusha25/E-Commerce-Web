import { useState } from "react";

export default function HargaDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Harga");

  const options = [
    "Harga: Rendah ke Tinggi",
    "Harga: Tinggi ke Rendah",
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Tombol utama */}
      <button
        onClick={() => setOpen(!open)}
        className="w-40 flex justify-between items-center px-4 py-2 bg-white rounded shadow-sm hover:bg-gray-100"
      >
        {selected}
        <span className="ml-2">▼</span>
      </button>

      {/* Menu dropdown */}
      {open && (
        <div className="absolute mt-1 w-56 bg-white border rounded shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
