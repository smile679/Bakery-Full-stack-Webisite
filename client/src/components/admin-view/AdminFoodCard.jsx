import { Trash } from 'lucide-react';
import footer from '../../assets/footer.png'
import { Button } from '../ui/button';

function AdminFoodCard({ product, btnText, handleEdit, handleDelete}) {
  return ( 
    <div className="relative w-full max-w-[400px] h-[250px] sm:h-[300px] rounded-2xl shadow-gray-800 shadow-md overflow-hidden">
      <img src={footer} className='w-full h-full object-cover rounded-2xl'/>
      <img src={product.image} className='absolute top-1 right-1 sm:right-3 w-2xs '/>
      <div className='w-full text-white font-semibold absolute bottom-5 px-2 sm:px-5'>
        <h3 className='text-xl mb-2 text-shadow-gray-800 text-shadow-md'>${product.price}</h3>
        <div className='w-full flex max-md:flex-col justify-between items-center'>
          <h3>{product.title}</h3>
          <Button
            onClick={() => handleEdit(product._id)}
            className='bg-red-500 hover:bg-red-600 max-md:w-full max-md:mt-2'>
              {btnText}
          </Button>
        </div>
      </div>
      <Button
        onClick={() => handleDelete(product._id)}
        className='absolute top-4 right-2 bg-red-500 hover:bg-red-600'>
          <Trash />
      </Button>
    </div>
   );
}

export default AdminFoodCard;