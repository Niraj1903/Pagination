import React, { useEffect, useState } from "react";
import { TiChevronRightOutline } from "react-icons/ti";
import { TiChevronLeftOutline } from "react-icons/ti";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 10;
  const TotalProducts = products.length;
  const noOfPages = Math.ceil(TotalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
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
        <button
          disabled={currentPage === 0}
          className="border border-black cursor-pointer text-3xl text-gray-700 hover:text-black pt-[6px]"
          onClick={() => goToPreviousPage()}
        >
          <TiChevronLeftOutline />
        </button>
        {[...Array(noOfPages).keys()].map((item) => (
          <button
            onClick={() => handlePageChange(item)}
            className="cursor-pointer border border-black py-2 px-3 mx-2 text-gray-600 font-bold"
            key={item}
          >
            {item + 1}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          className="border border-black cursor-pointer text-3xl text-gray-700 hover:text-black pt-[6px]"
          onClick={() => goToNextPage()}
        >
          <TiChevronRightOutline />
        </button>
      </div>
    </>
  );
};

export default Pagination;
