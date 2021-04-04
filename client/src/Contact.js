import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './Contact.css'

export default class Contact extends Component {
    constructor(props)
    {
        super(props);
        this.state=({
           name:'',
            email:'',
            message:''
        })
        this.onChange=this.onChange.bind(this);
        this.onClick=this.onClick.bind(this)
    }
    onChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onClick(e)
    {
        e.preventDefault();
        fetch('/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
            name:this.state.name,
            email:this.state.email,
            message:this.state.message
        })}).then(this.setState({
            name:'',
            email:'',
            message:''
        })).catch(e=>console.log(e.message))
    }
    render() {
        return (
            <div>
                
                <Navbar/>
                <div className="container mt-5">
                <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-primary text-white"><i className="fa fa-envelope"></i> Contact us.
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" name="name" onChange={this.onChange} value={this.state.name} required/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.onChange} value={this.state.email}  required/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" id="message" rows="6" name="message" onChange={this.onChange} value={this.state.message}  required></textarea>
                                </div>
                                <div className="mx-auto">
                                <button type="submit" className="btn btn-primary text-right" onClick={this.onClick}>Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4" >
                    <div className="card bg-dark mb-3">
                        <div className="card-header bg-success text-white text-uppercase"><i className="fa fa-home"></i> Address</div>
                        <div className="card-body" id="card-body">
                            <p>Forbes Building, Charanjit Rai Marg, Azad Maidan</p>
                            <p>400001 Fort,Mumbai</p>
                            <p>INDIA</p>
                            <p>Email : email@example.com</p>
                            <p>Tel. +91 70 56 91 51 84</p>

                        </div>

                                    </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

