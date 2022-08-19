import React,{useEffect,useState} from 'react';
import useWeather from "../hooks/useWeather";

const Result = () => {

 const { rest} = useWeather();
 const { name, main } = rest;
 const kelvin = 273.15;
const [image, setImage] = useState();

 useEffect(() => {
   const _clima = Object.values(rest)[1];
   if (_clima !== undefined) {
     const img = `http://openweathermap.org/img/wn/${_clima[0].icon}.png`;
     setImage(img);
   }
 }, [rest]);
return (
  <div className="container">
    <h2>Weather in {name} is: </h2>

    <div className="two-rows">
      <div>
        <p>
          {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Mín: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Máx: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
      </div>
      <div>
        <img className="w-full" src={image} />
      </div>
    </div>
  </div>
);

}

export default Result