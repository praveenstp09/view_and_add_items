import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

const handleCardClick = () => navigate(`/product/${product.id}`);

  const handleCartBtn = (e) => {
    e.stopPropagation();
    alert(`Added to Cart: ${product.name}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col items-start gap-0.5 w-full cursor-pointer border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative bg-gray-100 rounded-lg w-full aspect-[4/3] flex items-center justify-center group overflow-hidden">
  <img
    src={product.coverImage}
    alt={product.name}
    className="group-hover:scale-105 transition-transform object-cover w-full h-full"
  />
</div>

      <p className="md:text-base font-medium pt-2 w-full truncate">
        {product.name}
      </p>

      <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">
        {product.description}
      </p>

      <div className="flex items-center gap-2 mt-1">
        <p className="text-xs">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={`text-yellow-400 text-xs ${
                index < 4 ? "" : "opacity-30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-2 flex justify-between items-center">
        <p className="text-sm font-semibold text-gray-800">₹{product.price || "N/A"}</p>
        <button
          onClick={handleCartBtn}
          className="px-3 py-1 text-sm text-white bg-orange-600 rounded hover:bg-orange-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
