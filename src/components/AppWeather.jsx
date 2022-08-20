import React,{useState, useEffect} from 'react';
import Form from './Form';
import Result from './Result';
import Loading from './Loading';
import useWeather from '../hooks/useWeather';
import { useSearchParams} from 'react-router-dom';

const AppWeather = () => {
  const { rest, loading, noRest} = useWeather();
  const [image,setImage]=useState();
  const [searchparams]=useSearchParams();

  return (
    <>
      <div className="lg:mt-16 lg:mx-32 md:mt-16 md:mx-16 sm:mt-1 sm:mx-1">
        <p>
          Hi{" "}
          <span className="text-blue-500 font-bold text-2xl">
            {searchparams.get("name")}
          </span>{" "}
          chose one city to know the weather
        </p>

        <div className="grid gap-4 lg:grid-cols-2 md:w-full sm:w-full">
            <Form />
        <div className=" container">
              {
                loading ? <Loading /> : 
                rest?.name ? <Result /> : 
                noRest ? <p>{noRest}</p>: 
                <p className="text-center">
                    Waiting for You to choose the city and country!
                </p>
              }
          </div>
        </div>
      </div>
    </>
  );
}

export default AppWeather