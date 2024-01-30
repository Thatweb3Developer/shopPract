import{ React , useEffect }from 'react'
import { Outlet } from 'react-router-dom'

const Category = () => {

   const url = 'https://fakestoreapi.com/products/categories';

   useEffect ((url)=> {
      fetch(url)
      .then(res =>res.json())
      console.log(res)
   },[])
console.log('erges')
  return (


    <div className='text-center'>Category
    
     <Outlet ></Outlet>
    </div>
   
  )
}

export default Category