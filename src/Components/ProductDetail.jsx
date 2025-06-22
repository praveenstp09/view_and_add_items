import { useParams } from "react-router-dom";
import { useItems } from "../context/ItemContext";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const { items } = useItems();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = items.find((item) => String(item.id) === id);
    setProduct(found);
  }, [id, items]);

  if (!product) return <div className="p-6 text-gray-500">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main Image */}
        <img
          src={product.coverImage}
          alt={product.name}
          className="rounded object-cover w-full h-auto max-h-[400px]"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-blue-600 font-semibold mb-2">₹{product.price || 999}</p>
          <p className="text-gray-700 mt-2 mb-6">{product.description}</p>

          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full mr-3"
            onClick={() => {
              const cart = JSON.parse(localStorage.getItem("cart")) || [];
              cart.push(product);
              localStorage.setItem("cart", JSON.stringify(cart));
              alert("Product added to cart!");
              window.dispatchEvent(new Event("cart-update"));
            }}
          >
            Add to Cart
          </button>

          <button
            className="border border-orange-600 text-orange-600 font-semibold px-6 py-2 rounded-full hover:bg-orange-50 transition"
            onClick={() => alert("📝 Enquiry sent!")}
          >
            Enquire
          </button>
        </div>
      </div>

      {/* Extra Images */}
      {product.additionalImages?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">More Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional ${index + 1}`}
                className="rounded object-cover w-full h-40"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
