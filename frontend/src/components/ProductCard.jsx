export default function ProductCard({ product }) {
  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
      {/* Badge Baru */}
      <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
        BARU
      </span>

      {/* Gambar Produk */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 object-contain"
        />
      </div>

      {/* Nama Produk */}
      <h3 className="mt-3 text-sm font-semibold text-gray-800 line-clamp-2">
        {product.name}
      </h3>

      {/* Status */}
      <p className="mt-2 text-xs text-gray-500">
        <span className="font-bold">SBY:</span> {product.status}
      </p>

      {/* Harga */}
      <p className="mt-3 text-green-600 font-bold text-lg">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
    </div>
  );
}
