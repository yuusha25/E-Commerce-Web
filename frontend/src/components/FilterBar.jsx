import HargaDropdown from "./HargaDropdown";

function MyButton({ children }) {
  return (
    <button className="px-2 py-1 sm:px-4 sm:py-2 rounded bg-white hover:bg-gradient-to-r from-gray-900 via-purple-800 to-black hover:text-white text-xs sm:text-sm shadow">
      {children}
    </button>
  );
}

export default function FilterBar() {
  return (
    <div className="bg-gray-200 mx-2sm:mx-8 py-2 sm:py-4 px-2 sm:px-4 rounded-xl flex flex-wrap gap-2 sm:gap-3 items-center justify-center lg:justify-start text-xs sm:text-sm">
      {/* Judul */}
      <h5 className="w-full sm:w-auto mx-0 sm:mx-4 mb-1 sm:mb-0 text-gray-700 font-semibold text-xs sm:text-sm">
        Urutkan
      </h5>

      <div className="flex flex-wrap gap-2">
      {/* Tombol-tombol */}
        <MyButton>Terbaru</MyButton>
        <MyButton>Terlaris</MyButton>
        <HargaDropdown />
      </div>

    </div>
  );
}
