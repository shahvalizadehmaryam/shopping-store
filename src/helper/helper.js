const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};
const searchedProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};
const filterProducts = (products, category) => {
  if (!category) return products;
  const categoryProducts = products.filter((p) => p.category === category);
  return categoryProducts;
};
export { shortenText, searchedProducts, filterProducts };
