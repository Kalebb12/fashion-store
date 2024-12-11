import { useQuery } from "@tanstack/react-query";
import Productard from "../../components/productCard";
import { getProducts } from "../../services/apiProducts";

const HomeContent = () => {
  const {isPending , data : products , error} = useQuery({
    queryKey:['products'],
    queryFn: async () => getProducts()
  })
  return (
    <main className="flex flex-col px-5">
      <div className="flex items-center gap-2">
        <h1>New This week</h1>
        <sup className="font-extrabold text-[20px]">(x)</sup>
      </div>

      <div className="flex gap-6 pb-5 overflow-x-auto snap-x">
        {products && products.map((product) => {
          return (
           <Productard product={product} key={product.id}/>
          );
        })}
      </div>
    </main>
  );
};

export default HomeContent;
