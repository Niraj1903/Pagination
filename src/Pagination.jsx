import React, { useEffect } from "react";

const Pagination = () => {
  const fetchData = async () => {
    const paginationData = await fetch("https://dummyjson.com/products");
    const data = await paginationData.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Pagination</h1>
    </>
  );
};

export default Pagination;
