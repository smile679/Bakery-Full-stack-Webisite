import FoodCard from '@/components/common/FoodCard'
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'

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

  const handleAddToCart = (e) => {
    console.log("Added to cart");
  }

  return ( 
    <div id="Services" className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-4xl sm:text-5xl font-bold font-sansita-swashed text-[#111111]">
        Our Specialties
      </h1>
       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 px-2 sm:px-10 py-20 sm:py-30">
        {
          breads.map((bread, index) =>(
            <FoodCard
              key={index}
              image={bread.image}
              title={bread.title}
              price={bread.price}
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