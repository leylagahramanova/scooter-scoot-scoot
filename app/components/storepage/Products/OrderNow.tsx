"use client"
import React, { useState } from "react";
import { TypeProduct, products } from "./products";
import './OrderNow.css'
import SearchComponent from "./order/SearchComponent";
import ShowCourseComponent from "./order/ShowCourseComponent";
import UserCartComponent from "./order/UserCartComponent";

const OrderNow: React.FC = () => {
  const [productsData] = useState<TypeProduct[]>(products);
  const [cartCourses, setCartCourses] = useState<{ product: TypeProduct, quantity: number }[]>([]);

  const [searchCourse, setSearchCourse] = useState<string>('');

  const addCourseToCartFunction = (GFGcourse: TypeProduct) => {
    const alreadyCourses = cartCourses.find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map(item =>
        item.product.id === GFGcourse.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const deleteCourseFromCartFunction = (GFGCourse: TypeProduct) => {
    const updatedCart = cartCourses.filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce((total, item) =>
      total + item.product.price * item.quantity, 0);
  };

  const courseSearchUserFunction = (event: React.ChangeEvent<HTMLInputElement>) => { // Corrected event type
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = productsData.filter((course) =>
    course.title.toLowerCase().includes(searchCourse.toLowerCase()) // Changed from 'name' to 'title'
  );

  return (
    <div className="App-main">
      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />
      <div className="App-second-main">
      <UserCartComponent
        cartCourses={cartCourses}
        deleteCourseFromCartFunction={deleteCourseFromCartFunction}
        totalAmountCalculationFunction={totalAmountCalculationFunction}
        setCartCourses={setCartCourses}
      />
      <ShowCourseComponent
        courses={productsData}
        filterCourseFunction={filterCourseFunction}
        addCourseToCartFunction={addCourseToCartFunction}
      />
      </div>
       
 
    </div>
  );
};

export default OrderNow;
