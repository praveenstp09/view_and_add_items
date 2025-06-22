import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ItemContext } from "../context/ItemContext"; // adjust the path as needed

export default function ProductsDisplay() {
  const { items } = useContext(ItemContext); // get items from context
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(items); // update filtered list when context updates
  }, [items]);

  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-medium mb-8">Our Products</h1>
      {filtered.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {filtered.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
