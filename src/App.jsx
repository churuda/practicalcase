import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import AppWeather from "./components/AppWeather";
import UpBar from './pages/UpBar'
import {WeatherProvider} from './context/WeatherProvider' ;

function App (){
  return (
    <WeatherProvider>
      <UpBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/citie" element={<AppWeather />} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}
export default App
