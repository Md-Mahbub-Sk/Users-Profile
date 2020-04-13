import React from 'react';
import img from '../../img/Screenshot_2.png'
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={img} alt=""/>
        </div>
    );
};

export default Header;