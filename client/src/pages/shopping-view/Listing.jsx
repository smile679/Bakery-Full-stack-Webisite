import FoodCard from "@/components/common/FoodCard";
import { useSelector } from "react-redux";


function Listing() {
  const { productsList } = useSelector((state) => state.products);
  const handleAddToCart = (e) => {
    // Add your add to cart logic here
  }
  return ( 
    <section>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-sansita-swashed text-center text-[#111111] mt-10">
          Product Listing
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 py-10 sm:mb-10">
        {
          productsList.slice(0, 9).map((bread, index) =>(
            <FoodCard
              key={index}
              image={bread?.image}
              title={bread?.title}
              price={bread?.price}
              btnText="Add to Cart"
              handleClick={handleAddToCart}
            />
          ))
        }
      </div>
    </section>
   );
}

export default Listing;