import React,{useState} from 'react'
import useWeather from '../hooks/useWeather';

const Form = () => {
  const [alert, setAlert] = useState("");
  const { search, Research, consWeather } = useWeather();
  const { city, country } = search;

   const handleSubmit = (e) => {
     e.preventDefault();

     if (Object.values(search).includes("")) {
       setAlert("You must enter a name");
       return
     }
     setAlert("");
     consWeather(search);
   };
  return (
    <>
      <div className="container">
        {alert && <p>{alert}</p>} 
         <form className="w-full" onSubmit={handleSubmit}>
          <div className="max-w-96 mt-0 mx-auto mb-4">
            <label className="block" htmlFor="city">
              {" "}
              City
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              type="text"
              id="city"
              name="city"
              onChange={Research}
              value={city}
            />
          </div>
          <div className="max-w-96 mt-0 mx-auto mb-4">
            <label className="block" htmlFor="country">
              {" "}
              Country
            </label>
            <select
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="country"
              name="country"
              onChange={Research}
              value={country}
            >
              <option value="">Pick one</option>
              <option value="US">United States</option>
              <option value="MX">Mexico</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">Spain</option>
              <option value="PE">Peru</option>
              <option value="EC">Ecuador</option>
            </select>
          </div>
          <input
            className="bg-blue-500 hover:bg-blue-900 md:w-full lg:w-full sm:w-1 mt-5 p-2 text-white font-bold uppercase rounded-2xl"
            type="submit"
            value="Find Weather"
          />
        </form>
      </div>
    </>
  );
}

export default Form