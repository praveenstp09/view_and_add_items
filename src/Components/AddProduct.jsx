import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function Add() {
  const navigate = useNavigate();
  const { addItem } = useContext(ItemContext);

  const [item, setItem] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: "",
    additionalImages: ["", "", ""], // Up to 3 additional image URLs
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...item,
      id: Date.now(),
      additionalImages: item.additionalImages.filter((url) => url.trim() !== ""),
    };

    addItem(newItem);
    alert("✅ Item successfully added");
    navigate("/"); // Redirect to view items
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl p-4 mx-auto">
      <h2 className="text-2xl font-semibold">Add New Item</h2>

      <input
        type="text"
        placeholder="Item Name"
        className="w-full border p-2"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Item Type (Shirt, Shoes...)"
        className="w-full border p-2"
        value={item.type}
        onChange={(e) => setItem({ ...item, type: e.target.value })}
        required
      />

      <textarea
        placeholder="Description"
        className="w-full border p-2"
        value={item.description}
        onChange={(e) => setItem({ ...item, description: e.target.value })}
      />

      <input
        type="text"
        placeholder="Cover Image URL"
        className="w-full border p-2"
        value={item.coverImage}
        onChange={(e) => setItem({ ...item, coverImage: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Price (₹)"
        className="w-full border p-2"
        value={item.price}
        onChange={(e) => setItem({ ...item, price: e.target.value })}
        required
      />

      {item.additionalImages.map((img, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Additional Image ${index + 1} URL (optional)`}
          className="w-full border p-2"
          value={img}
          onChange={(e) => {
            const newImages = [...item.additionalImages];
            newImages[index] = e.target.value;
            setItem({ ...item, additionalImages: newImages });
          }}
        />
      ))}

      <button
        type="submit"
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        Add Item
      </button>
    </form>
  );
}
