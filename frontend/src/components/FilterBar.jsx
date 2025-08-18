import HargaDropdown from "./HargaDropdown";


function MyButton({ children }) {
  return (
    <button className="px-4 py-2 rounded bg-white hover:bg-gradient-to-r from-gray-900 via-purple-800 to-black hover:text-white">
      {children}
    </button>
  );
}

export default function FilterBar() {
  return (
    <div className="bg-gray-200 mx-8 py-4 rounded-xl flex gap-2 items-center">
        <h5 className="mx-4">Urutkan</h5>
      <MyButton>Terbaru</MyButton>
      <MyButton>Terlaris</MyButton>
      <HargaDropdown />
    </div>
  );
}
