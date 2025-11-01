import foodOne from '../../assets/food-one.png'
import foodTwo from '../../assets/food-two.png'
import foodThree from '../../assets/food-three.png'
import Rectangle21 from '../../assets/Rectangle-21.png'

function Featured() {
  const featuredTreats = [
  {
    image : foodOne,
    title : "Puff Pastry",
    price : "$15",
  },
  {
    image : foodTwo,
    title : "Doughnut",
    price : "$12",
  },
  {
    image : foodThree,
    title : "Rye Bread",
    price : "$8",
  },
  {
    image : Rectangle21,
    title : "Cup Cake",
    price : "$10",
  }
];


  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold font-sansita-swashed text-[#111111]">
          Featured Treats
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 px-2 sm:px-10 py-20 sm:py-30 overflow-hidden">
        {
          featuredTreats.map((treat, index) => (
            <div>
              <img
                key={index}
                src={treat.image}
                className="w-full h-[250px] sm:h-[300px] rounded-2xl shadow-gray-500 shadow-sm object-cover object-center"
              />
              <div className="flex max-sm:flex-col items-center mt-3">
                <h2 className="text-xl font-bold px-3">{treat.title}</h2>
                <h2 className="text-xl font-bold">{treat.price}</h2>
              </div>
            </div>
          ))
          }
        </div>
      </div>
   );
}

export default Featured;