import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/shop/home");
  }


  return ( 
    <div className="h-full flex flex-col ml-10 sm:ml-20 mt-20">
      <div>
        <p className="text-2xl text-secondary-foreground font-semibold">Delicious Cafe</p>
        <h1 className="text-5xl min-[375px]:text-6xl sm:text-8xl text-white font-sansita-swashed">Sweet Treats,<br/>Perfect Eats</h1>
      </div>
      <div className="flex items-center mt-40 sm:mt-10 gap-5">
        <Button
          onClick={handleShopNow}
          className='w-30 h-11 bg-secondary hover:bg-secondary/80 text-white font-bold cursor-pointer'>
          Shop Now
        </Button>
        <Button
          onClick={()=>navigate("/shop/listing")}
          variant='outline' className='w-30 h-11 text-secondary font-bold cursor-pointer'>
          Listing
        </Button>
      </div>
    </div>
   );
}

export default Home;