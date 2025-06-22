export const getItemsFromStorage = () => {
  const items = localStorage.getItem("items");
  return items ? JSON.parse(items) : [];
};

export const saveItemsToStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};
