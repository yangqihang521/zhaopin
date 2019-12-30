import React from "react"
import { useState } from 'react';
import '../assets/style/css/header.css'

function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="head">
      <div className="head-main">
        <div className="head-menu">
            <a className="logo"><img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" height="20" alt=""/></a>
            <i>|</i>
            <i className="wen">社招官网</i>
            <ul>
              <li></li>
            </ul>
        </div>
      </div>        
    </div>
  );
}

export default Header;
