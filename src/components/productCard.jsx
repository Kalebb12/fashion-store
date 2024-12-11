const Productard = ({ product }) => {
  return (
    <div className="w-[300px] min-w-[300px] snap-start">
      <img
        src={product.image}
        alt=""
        className="text-[##D7D7D7] border border-slate-500"
      />
      <p className="text-[#000000A8] text-[12px] font-medium mt-[14px]">
        {product.category}
      </p>
      <div className="flex items-center justify-between font-medium text-[14px]">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Productard;
