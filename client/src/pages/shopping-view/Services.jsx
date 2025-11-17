import FoodCard from "@/components/common/FoodCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/store/products-slice";
import { addToCart, fetchCartItems } from "@/store/cart-slice";
import { toast } from "sonner";

function Services() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  function handleAddToCart(getProductId) {
    console.log(user.id, getProductId);
    
    if(!user && !user.id) return;
      dispatch(addToCart({ userId: user.id, productId : getProductId, quantity : 1 })).then(data=>{
        if(data.payload?.success){
          toast.success(`${data.payload?.message}`)
          dispatch(fetchCartItems({ userId : user?.id }))
        } else {
          toast.error('Product Not found!')
        }
      }
    )
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if(!user && !user.id) return;
    
    dispatch(fetchCartItems({ userId : user?.id }))
  }, [dispatch]);

  return (
    <div id="Services" className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold font-sansita-swashed text-[#111111]">
          Our Specialties
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 sm:px-10 mt-20 sm:mt-30 mb-10">
        {
          productsList.slice(0, 6).map((bread, index) =>(
            <FoodCard
              key={index}
              foodItem={bread}
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