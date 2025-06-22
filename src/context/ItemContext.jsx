import { createContext, useState, useEffect, useContext } from "react";
import {
  getItemsFromStorage,
  saveItemsToStorage,
} from "../utils/localStorageUtils";

export const ItemContext = createContext();
const defaultItems = [
  {
    id: 1,
    name: "White Shirt",
    type: "Shirt",
    description:
      "A classic white cotton shirt suitable for formal and casual wear.",
    coverImage:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/g/3/s/50-whitediamond1pf-ramraj-cotton-original-imah9e7urr2bupha.jpeg?q=70&crop=false",
    additionalImages: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/y/f/5/50-whitediamond1pf-ramraj-cotton-original-imah9e7uruejfskc.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/l/v/9/50-whitediamond1pf-ramraj-cotton-original-imah9e7uhzfusgfx.jpeg?q=70&crop=false",
    ],
    price: 799,
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    type: "Pant",
    description: "Comfortable and stylish slim-fit blue jeans.",
    coverImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/jean/2/9/y/30-bluejeans-29-brexx-original-imahcpr3dwsytbmh.jpeg?q=70&crop=false",
    additionalImages: [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/jean/a/w/a/30-bluejeans-29-brexx-original-imahcpr2haybnpag.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/jean/6/f/8/30-bluejeans-29-brexx-original-imahcpr3bchzjcmb.jpeg?q=70&crop=false",
    ],
    price: 1299,
  },
  {
    id: 3,
    name: "Running shoes",
    type: "Shoes",
    description: "Breathable and lightweight sneakers ideal for running.",
    coverImage: "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/1/1/m/9-assg1102n-9-abros-white-mint-original-imahcg9j7ppxgzkf.jpeg?q=70&crop=false",
    additionalImages: [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/o/3/4/10-assg1102n-10-abros-white-mint-original-imahcg9jhj7dgwkh.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/f/l/0/9-assg1102n-9-abros-white-mint-original-imahcg9j2g5s7pde.jpeg?q=70&crop=false",
    ],
    price: 2299,
  },
  {
    id: 4,
    name: "Cricket Bat",
    type: "Sports Gear",
    description: "Professional-grade English willow cricket bat.",
    coverImage: "https://rukminim2.flixcart.com/image/416/416/jppsqkw0/bat/w/5/k/0-4-srs-gennis-long-handle-na-mrf-original-imaf2jjy4kukyr2y.jpeg?q=70&crop=false",
    additionalImages: [
     "https://rukminim2.flixcart.com/image/128/128/k2m6ufk0/bat/q/a/r/1160-1220-short-handle-sikander-1000-cb-1149-sh-spartan-original-imafkfvahbp7scbx.jpeg?q=70&crop=false",
    ],
    price: 3499,
  },
  {
    id: 5,
    name: "Sports T-Shirt",
    type: "Shirt",
    description: "Moisture-wicking performance t-shirt for workouts.",
    coverImage: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/g/n/l-or10-technosport-original-imagnbpybsdmhtjw.jpeg?q=70&crop=false",
    additionalImages: [
      "https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/y/m/e/l-or10-technosport-original-imagnbpydgffr6x7.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/s/p/d/l-or10-technosport-original-imagnbpyedwuva3j.jpeg?q=70&crop=false",
    ],
    price: 599,
  },
];

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = getItemsFromStorage();
    if (storedItems.length === 0) {
      saveItemsToStorage(defaultItems);
      setItems(defaultItems);
    } else {
      setItems(storedItems);
    }
  }, []);

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    saveItemsToStorage(updatedItems);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => useContext(ItemContext);
