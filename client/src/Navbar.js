import React, { Component } from 'react'
import logo from './logo.jpg'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                    <a class="navbar-brand" href="/">Go Corona Go</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="signin">Sign In</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="register">Register</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="about">About us</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="contact">Contact us</a>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
