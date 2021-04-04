import React, { Component } from 'react'
import Navbar from './Navbar'
import './Login.css'
import Footer from './Footer'

export default class Login extends Component {
    constructor(props)
    {
        super(props)
        this.state=({
            username:'',
            password:''
        })
        this.onChange=this.onChange.bind(this)
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
        e.preventDefault()
       fetch('/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
           username:this.state.username,
           password:this.state.password
       })}).then(this.setState({
           username:'',
           password:''
       }))
        
         
    }
    render() {
        return (
            <div>
                <Navbar/>
                <h1 className="text-center text-dark bg-white">Covid-19 Vaccine Registeration Portal</h1>
                <div className="login-form">
                    <form action="/signin" method="post">
                        <h2 className="text-center">Citizen Sign in</h2>       
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.onChange} value={this.state.username} required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" name="password"  onChange={this.onChange} value={this.state.password} required="required"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onChange={this.onClick}>Sign in</button>
                        </div>
                        <div className="clearfix">
                            <a href="hospitalAdministrative" className="float-right">Hospital Administrative?</a>
                        </div>  
                        <div className="clearfix">
                            <a href="#" className="float-right">Forgot Password?</a>
                        </div>
                               
                    </form>
                    <p className="text-center"><a href="register">Create an Account</a></p>
                </div>
                <Footer/>
            </div>
        )
    }
}
