import React from 'react'

export const CardsView = ({products}) => {
  return (
    <div className="card-container">
      {products.map((product, ind) => (
        <div key={ind} className="card">
          <div className="cardHead">
            <h3>{product.name}</h3>
            <p>{product.color}</p>
          </div>
          <img src={product.img} />
          <div className="cardFooter">
            <span>${product.price}</span>
            <span className="button">ADD TO CART</span>
          </div>
        </div>
      ))}
    </div>
  )
}
