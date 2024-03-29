import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Gallery from './Pages/Gallery';
import "./styles/style.css"
import Goods from './Pages/Goods';
import GoodInfo from './Pages/GoodInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/Gallery' element={<Gallery></Gallery>}></Route>
      <Route path='/Goods' element={<Goods></Goods>}></Route>
      <Route path='/Good/:id' element={<GoodInfo></GoodInfo>}></Route>
      <Route path='*' element={<div>Страница не найдена</div>}></Route>
      </Routes>
    </BrowserRouter>

);

