import React, { useState } from "react";
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";

import './scss/main.scss';

function App(props) {

  //ПОЛУЧЕНИЕ ВСЕХ ПРОДУКТОВ ИЗ JSON И ПЕРЕДАЧА В REDUX
  // React.useEffect( ()=> {
  //     const url = "/json/products.json";
  //     fetch(url)
  //         .then( (res) => res.json() )
  //         .then(
  //             (result) => {
  //                 // setProductItems(result.items);
  //                 dispatch(setProducts(result.items));
  //             }
  //         );
  // }, []);

  return (
    <div className="App">
      {/* <Header navItems={navItems} categories={categories} /> */}
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route exact element={<Main/>} path="/" />
          </Routes>
        </BrowserRouter>
        {/* <Route render={ (routeProps)=> <Catalog categories={categories} {...routeProps}/>} path="/catalog/"/> */}
        {/* <Route component={About} path="/about/"/> */}
        {/* <Route component={ProductView} path="/product/:id"/> */}
      </main>
      {/* <Footer categories={categories}/> */}
    </div>
  );
}

export default App;
