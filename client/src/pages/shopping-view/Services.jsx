import FoodCard from "@/components/common/FoodCard";
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/store/products-slice";

function Services() {
  const breads = [
  {
    image : f1,
    title : "Whole Grain",
    price : "$30",
  },
  {
    image : f2,
    title : "Sourdough",
    price : "$46",
  },
  {
    image : f3,
    title : "Rye Bread",
    price : "$40",
  },
  {
    image : f4,
    title : "Baguette",
    price : "$25",
  },
  {
    image : f5,
    title : "Focaccia",
    price : "$35",
  },
  {
    image : f6,
    title : "Ciabatta",
    price : "$45",
  }
  ]
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.products);

  function handleAddToCart(e) {
    console.log("Added to cart");
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return ( 
    <div id="Services" className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold font-sansita-swashed text-[#111111]">
          Our Specialties
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 sm:px-10 mt-20 sm:mt-30 mb-10">
        {
          productsList.slice(0, 8).map((bread, index) =>(
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
      <Button
        variant="outline"
        className="text-xl text-center font-bold font-sansita-swashed text-muted-foreground hover:text-secondary mb-10"
        onClick={() => navigate("/shop/listing")}
      >
        Load More
      </Button>
    </div>
   );
}

export default Services;