import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const paginationData = await fetch(
      "https://dummyjson.com/products?limit=500"
    );
    const data = await paginationData.json();
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Pagination</h1>
      <div className="flex flex-wrap">
        {products.map((item) => (
          <ProductCard
            className="flex flex-wrap"
            key={item.id}
            image={item.thumbnail}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default Pagination;
