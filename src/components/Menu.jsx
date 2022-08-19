import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  
  const featuredProducts = [
    "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
  ]

  const headers = [
    "Know the weather around the world",
    "Find the temperature in your city",
    "Rain or Sun"
  ]

  let count = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nameP,setNameP]=useState("");
  const slideRef = useRef();
  const headerRef = useRef();

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    if (currentIndex == 2) {
       setCurrentIndex(0);
    }
  }

  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
     console.log(currentIndex);
    setCurrentIndex(count);
  }

  return (
    <>
      <div ref={slideRef} className="w-full select-none relative">
        <div className="aspect-w-full aspect-h-9 max-h-96">
          <img
            className="w-full max-h-96"
            src={featuredProducts[currentIndex]}
            alt=""
          />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          ></button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          ></button>
          <div
            ref={headerRef}
            class="mx-16 mt-3/4 carousel-caption hidden md:block absolute text-center"
          >
            <h5 class="md:text-xl lg:text-xl sm:text-sm text-blue-600 font-bold">
              {headers[currentIndex]}
            </h5>
          </div>
        </div>
      </div>
      <div className="lg:mt-16 lg:mx-32 md:mt-4 md:mx-16 sm:mt-1 sm:mx-1">
        <div className="grid  lg:grid-cols-2  gap-8 md:w-full sm:w-full">
          <div className="container">
            <h1 className=" capitalize font-bold text-blue-900 ">
              Write your name or your nickname
            </h1>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              type="text"
              id="nameP"
              name="nameP"
              value={nameP}
              onChange={(e) => setNameP(e.target.value)}
            />
          </div>
          <div className="container">
            <h1 className="font-bold text-blue-900">Choose an Option</h1>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "text-yellow-500"
                  : "p-4 text-blue-700 block hover:bg-blue-400 rounded-md hover:text-blue-900 text-xl font-bold"
              }
              to="/main"
            >
              Main Cities
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "rounded-lg"
                  : "p-4 text-blue-700 block hover:bg-blue-400 rounded-md hover:text-blue-900 text-xl font-bold"
              }
              to="/cities"
            >
              My City
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
