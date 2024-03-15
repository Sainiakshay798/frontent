import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import './Header.css';
function Header() {
  return (
    <div className='headerMain'>
      <div className='headerTop'>
        <div className='headerLeft'>
          <img src='https://www.needledust.com/cdn/shop/files/logo-store-image_155x.png?v=1614301519' alt='image not found' />
        </div>
        <div className='headerRight' >
          <div className='headerRight1'>
            <label htmlFor="currency">INR</label>
            <select id="currency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div className='headerLogo1'><CgProfile /></div>
          <div className='headerLogo2'><IoSearch /></div>
          <div className='headerLogo3'><FaCartArrowDown /></div>
        </div>
      </div>
      <div className='headerBottom'>
        <h6>Women</h6>
        <h6>NEEDLEDUST X ABHINAV MISHRA</h6>
        <h6>PURSES</h6>
        <h6>MAN</h6>
        <h6>KIDS</h6>
        <h6>GIFTING</h6>
        <h6>CELEBRITIES</h6>
        <img src='https://sandbyshirin.com/cdn/shop/files/SAN_200x.png?v=1614949992' alt='not found' />
      </div>
    </div>
  );
}

export default Header;
