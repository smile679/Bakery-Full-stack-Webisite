import FoodCard from "@/components/common/FoodCard";
import { addToCart, fetchCartItems } from "@/store/cart-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";


function Listing() {
  const { productsList } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleAddToCart(getProductId) {
      dispatch(addToCart({ userId: user.id, productId : getProductId, quantity : 1 })).then(data=>{
        if(data.payload?.success){
          toast.success(`${data.payload?.message}`)
          dispatch(fetchCartItems({ userId : user?.id }))
        } else {
          toast.error('Product Not found!')
        }
      }
      )}

     useEffect(() => {
        dispatch(fetchCartItems({ userId : user?.id }))
      }, [dispatch]);

  return (
    <section className="mt-20">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-sansita-swashed text-center text-[#111111] my-10">
          Product Listing
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 py-10 sm:mb-10">
        {
          productsList.map((bread, index) =>(
            <FoodCard
              key={index}
              foodItem={bread}
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