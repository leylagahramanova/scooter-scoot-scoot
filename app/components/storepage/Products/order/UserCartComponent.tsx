import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import { TypeProduct } from '../products';

interface UserCartComponentProps {
    cartCourses: { product: TypeProduct, quantity: number }[];
    deleteCourseFromCartFunction: (product: TypeProduct) => void;
    totalAmountCalculationFunction: () => number;
    setCartCourses: React.Dispatch<React.SetStateAction<{ product: TypeProduct, quantity: number }[]>>;
}

const UserCartComponent: React.FC<UserCartComponentProps> = ({ cartCourses, deleteCourseFromCartFunction, totalAmountCalculationFunction, setCartCourses }) => {
    return (
        <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
            <h2>My Cart</h2>
            {cartCourses.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartCourses.map((item) => (
                            <li key={item.product.id} className="cart-item">
                                <div>
                                    <div className="item-info">
                                        <div className="item-image">
                                            {/* Use Next.js Image component for images */}
                                            <img src={item.product.image} alt={item.product.title} width={100} height={100} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.product.title}</h3>
                                            <p>Price: ${item.product.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item-actions">
                                            <button
                                                className="remove-button"
                                                onClick={() => deleteCourseFromCartFunction(item.product)}>
                                                Remove Product
                                            </button>
                                            <div className="quantity">
                                                <button style={{ margin: "1%" }}
                                                    onClick={(e) => {
                                                        setCartCourses((prevCartCourses) => {
                                                            const updatedCart = prevCartCourses.map(
                                                                (prevItem) =>
                                                                    prevItem.product.id === item.product.id
                                                                        ? { ...prevItem, quantity: item.quantity + 1 }
                                                                        : prevItem
                                                            );
                                                            return updatedCart;
                                                        })
                                                    }}>+</button>
                                                <p className='quant'>{item.quantity} </p>
                                                <button
                                                    onClick={(e) => {
                                                        setCartCourses((prevCartCourses) => {
                                                            const updatedCart = prevCartCourses.map(
                                                                (prevItem) =>
                                                                    prevItem.product.id === item.product.id
                                                                        ? { ...prevItem, quantity: Math.max(item.quantity - 1, 0) }
                                                                        : prevItem
                                                            );
                                                            return updatedCart;
                                                        })
                                                    }}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-section">
                        <div className="checkout-total">
                            <p className="total">Total Amount:
                                ${totalAmountCalculationFunction()}
                            </p>
                        </div>
                        <button
                            className="checkout-button"
                            disabled={cartCourses.length === 0 ||
                                totalAmountCalculationFunction() === 0}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserCartComponent;
