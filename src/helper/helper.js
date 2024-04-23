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

//agar search khali va ya category all bashe unaro hazf mikone.
const createQueryObject = (currQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currQuery;
    return rest;
  }
  return { ...currQuery, ...newQuery };
};

// agar user category va search o zade bad safhero refresh karde bayad dar url data ha bemune va napare ta ba asase un data be user neshun dade beshe.
const getInitialQuery = (searchParams) => {
  const query = {};
  const search = searchParams.get("search"); 
  const category = searchParams.get("category");
  if (search) query.search = search;
  if (category) query.category = category;
  return query;
};
export {
  shortenText,
  searchedProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
};
