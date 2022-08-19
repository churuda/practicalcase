import React from 'react'
import Form from './Form';

const AppWeather = () => {
  return (
    <>
      <div className="lg:mt-32 lg:mx-32 md:mt-16 md:mx-16 sm:mt-1 sm:mx-1">
        <div className="grid  lg:grid-cols-2 md:w-full sm:w-full">
          <div className="rounded-lg">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppWeather