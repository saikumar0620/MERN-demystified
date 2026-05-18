import PrimaryButton from '../components/Primarybutton'
import {useDispatch} from 'react-redux'
import { addItem } from '../features/cart/cartSlice'


const products=[{
  id:1,
  name:"CHOCOLATES",
  price:50
},

{
  id:2,
  name:"BISCUTS",
  price:50
}
]



const ProductPage = () => {

  const dispatch=useDispatch()

  return (
    <div className='flex flex-col items-center gap-3 p-2'>
      {
        products.map((product)=>(
          <article className='bg-blue-400 p-2 rounded-2xl text-white'  key={product.id}>
            <h1>{product.name}</h1>
            <p>₹{product.price}</p>
            <PrimaryButton onClick={()=>dispatch(addItem(product))}>Add to cart</PrimaryButton>
          </article>
        ))
      }
    </div>
  )
}

export default ProductPage