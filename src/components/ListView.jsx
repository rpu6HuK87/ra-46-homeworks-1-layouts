import React from 'react'

export const ListView = ({products}) => {
  return (
    <div>
      {products.map((product, ind) => (
        <div className="container-list" key={ind}>
          <img src={product.img} />
          <h3>{product.name}</h3>
          <p>{product.color}</p>
          <span>${product.price}</span>
          <span className="button">ADD TO CART</span>
        </div>
      ))}
    </div>
  )
}
