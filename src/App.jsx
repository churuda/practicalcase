import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppWeather from './components/AppWeather';
import MainCities from './components/MainCities';
import Menu from './components/Menu';
import UpBar from './pages/UpBar'
import {WeatherProvider} from './context/WeatherProvider' ;

function App (){
  return (
    <WeatherProvider>
      <UpBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Menu />} />
          <Route path="/main" element={<MainCities />} />
          <Route path="/cities" element={<AppWeather />} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}
export default App
