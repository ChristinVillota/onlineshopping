import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './user';
import '../css/body.css';
import shop from '../shop.png';
import lips from '../lips.png';
import makeup from '../makeup.png';
import woman from '../woman.png';


class Body extends Component {
    

    render() {
        
        return (

            <div className="container mt-3">
            <div id="myCarousel" class="carousel slide">
            <br></br>
            <center>
            <div className="carousel-inner">
                <div className="carousel-item active">
                     <img src={woman} alt="shoes" width="1100" height="500"></img>
                </div>
                {/* <div class="carousel-item">
                        <img src={lips} alt="chicago" width="1100" height="500"></img>
                 </div>
                 <div class="carousel-item">
                    <img src={makeup} alt="New York" width="1100" height="500"></img>
                </div> */}
            </div>
            </center>

            <a class="carousel-control-prev" href="#myCarousel">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#myCarousel">
                <span class="carousel-control-next-icon"></span>
            </a>

            </div>
            </div>

            // <div className='body'>
            //     <center>
            //     <h2>Online Shopping</h2>
            //     </center>
                
            //     <img src={shop} alt="shop"></img>

            // </div>
        );
    }
}



export default Body;