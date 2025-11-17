import FoodCard from '@/components/common/FoodCard'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchProducts } from '@/store/products-slice';

function Services() {
  const { productsList } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    toast.info("Please Login to add items to your cart!");
    navigate("/auth/login");
  }

  useEffect(() => {
   dispatch(fetchProducts());
  }, [dispatch]);

  return ( 
    <div id="Services" className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-4xl sm:text-5xl font-bold font-sansita-swashed text-[#111111]">
        Our Specialties
      </h1>
       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 sm:px-10 py-20 sm:mb-10">
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
    </div>
   );
}

export default Services;