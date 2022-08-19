import React from 'react'
import Form from './Form';
import Result from './Result';
import Loading from './Loading'
import useWeather from '../hooks/useWeather'

const AppWeather = () => {
  const { rest, loading, noRest} = useWeather();
  return (
    <>
      <div className="lg:mt-32 lg:mx-32 md:mt-16 md:mx-16 sm:mt-1 sm:mx-1">
        <div className="grid gap-4 lg:grid-cols-2 md:w-full sm:w-full">
          <div className="rounded-lg">
            <Form />
          </div>
          <div className=" container">
            <div className="rounded-lg">
              {loading ? (
                <Loading />
              ) : rest?.name ? (
                <Result />
              ) : noRest ? (
                <p>{noRest}</p>
              ) : (
                <p>Weather</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppWeather