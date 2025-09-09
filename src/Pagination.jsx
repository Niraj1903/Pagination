import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 10;
  const TotalProducts = products.length;
  const noOfPages = Math.ceil(TotalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const fetchData = async () => {
    const paginationData = await fetch(
      "https://dummyjson.com/products?limit=500"
    );
    const data = await paginationData.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="flex justify-center font-bold my-3 text-green-700">
        PAGINATION
      </h1>

      <div className="flex flex-wrap">
        {products.slice(start, end).map((item) => (
          <ProductCard
            className="flex flex-wrap"
            key={item.id}
            image={item.thumbnail}
            title={item.title}
          />
        ))}
      </div>
      <div className="p-5 flex justify-center">
        {[...Array(noOfPages).keys()].map((item) => (
          <span
            className="border border-black py-2 px-3 mx-2 text-gray-600 font-bold"
            key={item}
          >
            {item + 1}
          </span>
        ))}
      </div>
    </>
  );
};

export default Pagination;
