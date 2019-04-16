import React, { Component } from 'react';
import '../css/header.css';
;
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <ul className="nav">
                <input type="text" placeholder="Search.."></input>
                <a href="#" class="btn btn-info btn-lg">
                    <span class="glyphicon glyphicon-shopping-cart"></span> Cart
                    </a>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Products</a></li>  
                    <li><a href="#contact">Contact Us</a></li>
                    <li>{this.props.date}</li>
                </ul>
            </div>
        );
    }
}

class Header2 extends Component {
    render() {
        return (
            <div className='header2'>
                <h1>HEADER2!!!</h1>
            </div>
        );
    }
}

export default Header;
export {Header, Header2};