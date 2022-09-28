import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h1 className='header-title'>Meal <span style={{color:'#ef9841'}}>DB</span></h1>
      </div>
      <div className='nav-item'>
        <a href="/Home">Home</a>
        <a href="/Food">Food List</a>
        <a href="/Order">Order List</a>
        <a href="/Popular">Popular Food</a>
      </div>
    </div>
  );
};

export default Header;