import React from 'react';
import { TypeProduct } from '../products';
import  Image  from "next/image";
interface ShowCourseComponentProps {
    courses: TypeProduct[];
    filterCourseFunction: TypeProduct[];
    addCourseToCartFunction: (product: TypeProduct) => void;
}

const ShowCourseComponent: React.FC<ShowCourseComponentProps> = ({ courses, filterCourseFunction, addCourseToCartFunction }) => {
    return (
        <div className="product3-list">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry, No matching Product found.
                </p>
            ) : (
                filterCourseFunction.map((product) => (
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
                ))
            )}
        </div>
    );
}

export default ShowCourseComponent;