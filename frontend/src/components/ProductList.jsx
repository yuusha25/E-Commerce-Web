import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "LattePanda V1 4GB/64GB The Smallest...",
    image: "https://i.ibb.co/W5Khp6c/lattepanda.png",
    status: "Indent",
    price: 4852000,
  },
  {
    id: 2,
    name: "79L18",
    image: "https://i.ibb.co/D9sG3Xq/79L18.png",
    status: "Indent",
    price: 3600,
  },
  {
    id: 3,
    name: "DS18S20 TO-92",
    image: "https://i.ibb.co/s3Xp8Vt/ds18s20.png",
    status: "Indent",
    price: 30600,
  },
  {
    id: 4,
    name: "Terminal Block Kaca 6 Pin",
    image: "https://i.ibb.co/cTvgZjV/terminal-block.png",
    status: "Indent",
    price: 6150,
  },
];

export default function ProductList() {
  return (
    <div className="m-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
