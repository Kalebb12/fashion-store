import Productard from "../../components/productCard";
import { getProducts } from "../../services/apiProducts";

const HomeContent = () => {
  return (
    <main className="flex flex-col px-5">
      <div className="flex items-center gap-2">
        <h1>New This week</h1>
        <sup className="font-extrabold text-[20px]">(x)</sup>
      </div>

      <div className="flex gap-6 pb-5 overflow-x-scroll snap-x">
        {/* {products.map((product) => {
          return (
           <Productard product={product} />
          );
        })} */}
      </div>
    </main>
  );
};

export default HomeContent;
