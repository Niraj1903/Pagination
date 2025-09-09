const ProductCard = ({ title, image }) => {
  return (
    <>
      <div className="border border-black w-[242px] m-2 p-2 flex flex-wrap">
        <img src={image} alt="" />
        <p className="m-auto">{title}</p>
      </div>
    </>
  );
};

export default ProductCard;
