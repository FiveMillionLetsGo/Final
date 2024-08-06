import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Main from "./components/Main";
import Menu from "./components/Menu";
import Size from "./components/Size";
import Temperature from "./components/Temperature";
import Category from "./components/Category";
import Payment from "./components/Payment";

function App() {
  const [age, setAge] = useState('b');

  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <div>
            <p className="app__header_first">
              A TWOSOME PLACE
            </p>
            <p className="app__header_second">COFFEE & DESSERT</p>
          </div>
        </div>
        {/* <div className="Link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/size">Size</Link></li>
            <li><Link to="/temperature">Temperature</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/payment">Payment</Link></li>
          </ul>
        </div> */}
        <div className="app__body">
          {age === 'a' ? (
            <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbQpv%2FbtrI6qm2psT%2FyX0Gh3vOoXKMTNEPS4fW2k%2Fimg.jpg" alt="Conditional" />
          ) : (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/size" element={<Size />} />
              <Route path="/temperature" element={<Temperature />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/category" element={<Category />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
