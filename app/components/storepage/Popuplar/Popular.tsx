
import React, { useState } from 'react';
import  Image  from "next/image";
import { TypeProduct,products } from '../Products/products';
interface PopularProps {
    courses: TypeProduct[];
    productsData: TypeProduct[];
    addCourseToCartFunction: (product: TypeProduct) => void;
}
const Popular: React.FC<PopularProps> = ({ courses,  addCourseToCartFunction }) => {

  return (
    <div className="product3-list">

{products.map((product) => (
            <div className="product3" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <button
                    className="add-to-cart-button"
                    onClick={() => addCourseToCartFunction(product)}
                >
                    Add
                </button>
            </div>
        ))}
    
</div>
  )
}

export default Popular