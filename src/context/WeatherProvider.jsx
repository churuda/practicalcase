import { useState,createContext } from "react";
import axios from "axios";

const WeatherContext= createContext();

const WeatherProvider=({children})=>{
    const [search, setSearch] = useState({
      city: "",
      country: "",
    });
    const [rest, setRest] = useState({});
    const [loading, setLoading] = useState(false);
    const [noRest, setNoRest] = useState(false);

     const Research = (e) => {
       setSearch({
         ...search,
         [e.target.name]: e.target.value,
       });
     };

     const consWeather = async (datos) => {
       setLoading(true);
       setNoRest(false);
       try {
         const { city, country } = datos;

         const appId = "5b6c91a0a0314ae5d6d8079cbad7ae16";

         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        
         const { data } = await axios(url);
         const {lon , lat }=Object.values(data)[0];
    

         const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
        console.log(urlWeather)
         const { data: clima } = await axios(urlWeather);
         console.log(clima)
        setRest(clima);
       } catch (error) {
         setNoRest("Not Found");
       } finally {
         setLoading(false);
       }
     };

    return (
      <WeatherContext.Provider
        value={{
          search,
          Research,
          consWeather,
          rest,
          loading,
          noRest,
        }}
      >
        {children}
      </WeatherContext.Provider>
    );
}

export {
    WeatherProvider
}

export default WeatherContext