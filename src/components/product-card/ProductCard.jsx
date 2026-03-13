import React from 'react'

import "./ProductCard.css";

const ProductCard = ({data}) => {
    console.log(data);
    
  return (
    <div className='container'>
        {data.map((elem)=>{
            return <div className='card'>
               <img src={elem.image} alt="product" />

      <h2>{elem.name}</h2>

      <p className="category">{elem.category}</p>

      <h3>{elem.price}</h3>

      <button>Add To Cart</button>
            </div>
        })}
    </div>
  )
}

export default ProductCard