import React, { Component } from 'react'
import Navbar from './Navbar'
import img2 from './img2.jfif'
import img1 from './img1.png'
import img3 from './img3.jfif'
import './About.css'
import Footer from './Footer'

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
            
                </div>

                <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                    <span className="glyphicon glyphicon-globe logo"></span>
                    </div>
                    
                    <div className="container-main">
                    <h2 className="fouders">About Us</h2>
                    
                    <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
                    <p><strong>VISION:</strong> Our vision Lorem ipsum lorem lorem  lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </div>
                </div>
                </div>
                <div className="container-fluid text-center bg-grey">
                    <h2>Our Team</h2>
                    
                    <div className="row text-center">
                        <div className="col-sm-4">
                        <div className="thumbnail">
                            <div className="image">
                                <img src={img2} alt="img1"/>
                            </div>
                            
                            <p><strong className="fouders">Mark-ZuckerBerg</strong></p>
                            <p className="profile">Founder & CEO</p>
                            <p>
                            Mark Zuckerberg, in full Mark Elliot Zuckerberg, (born May 14, 1984, White Plains, New York, U.S.), American computer programmer who was cofounder and CEO (2004– ) of Facebook, a social networking Web site.
                            </p>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="thumbnail">
                            <div className="image">
                                <img src={img1} alt="New York"/>
                            </div>
                            
                            <p><strong className="fouders">Steve Jobs</strong></p>
                            <p  className="profile">Art Designer</p>
                            <p>Steve Jobs was a charismatic pioneer of the personal computer era. With Steve Wozniak, Jobs founded Apple Inc. in 1976 and transformed the company into a world leader in telecommunications. Widely considered a </p>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="thumbnail">
                            <div className="image">
                               <img src={img3} alt="San Francisco"/> 
                            </div>
                            
                            <p><strong className="fouders">Steve Woznaik</strong></p>
                            
                            <p  className="profile">Marketing Head</p>
                            <p>Steve Wozniak, byname of Stephen Gary Wozniak, (born August 11, 1950, San Jose, California, U.S.), American electronics engineer, cofounder, with Steve Jobs, of Apple Computer, and designer of the first commercially.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Footer/>
            </div>
        )
    }
}

