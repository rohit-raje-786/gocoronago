import React, { Component } from 'react'
import './Register.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default class Register extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            username:'',
            password:'',
            confirm_password:'',
            phoneno:'',
            adhno:'',
            addr1:'',
            addr2:'',
            city:'',
            zip:''
        }
        this.onClick=this.onClick.bind(this)
        this.onChange=this.onChange.bind(this);
    }
    onChange(e)
    {
      
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }
    onClick(e)
    {
        
        e.preventDefault();
        const {password,confirm_password}=this.state;
        console.log(password)
        console.log(confirm_password)
        if(password===confirm_password)
        {
            fetch('/register',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    first_name:this.state.first_name,
                    last_name:this.state.last_name,
                    email:this.state.email,
                    username:this.state.username,
                    password:this.state.password,
                    confirm_password:this.state.confirm_password,
                    phoneno:this.state.phoneno,
                    adhno:this.state.adhno,
                    addr1:this.state.addr1,
                    addr2:this.state.addr2,
                    city:this.state.city,
                    zip:this.state.zip
                })
            }).then(
                    this.setState({
                        first_name:'',
                        last_name:'',
                        email:'',
                        username:'',
                        password:'',
                        confirm_password:'',
                        phoneno:'',
                        adhno:'',
                        addr1:'',
                        addr2:'',
                        city:'',
                        zip:''
                    }))
            .catch(e=>console.log('unable to fetch'));
        }
        else{
            return(
                <h1>Wrong</h1>
            )
        }
       
    };
    render() {
        
        return (
            <div>
              
                    <Navbar/>
               
                 
                <div className="container">
                        <div className="signup-form">
                    <form action="" method="POST">
                        <h2>Citizen Registeration</h2>
                        <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                        <div className="form-group">
                            <div className="row">
                                <div className="col"><input type="text" className="form-control" onChange={this.onChange} name="first_name" placeholder="First Name" value={this.state.first_name} required="required"/></div>
                                <div className="col"><input type="text" className="form-control" onChange={this.onChange} name="last_name" placeholder="Last Name" value={this.state.last_name} required="required"/></div>
                            </div>        	
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" onChange={this.onChange} name="email" placeholder="Email" value={this.state.email} required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="username" placeholder="Username" value={this.state.username} required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" onChange={this.onChange} name="password" placeholder="Password" value={this.state.password} required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" onChange={this.onChange} name="confirm_password" placeholder="Confirm Password" value={this.state.confirm_password} required="required"/>
                        </div>    
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="phoneno" placeholder="Phone No" value={this.state.phoneno} required="required"/>
                        </div>     
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="adhno" placeholder="Adharcard No" value={this.state.adhno} required="required"/>
                        </div>   
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="addr1" placeholder="Address 1" value={this.state.addr1} required="required"/>
                        </div>  
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="addr2" placeholder="Address 2" value={this.state.addr2} required="required"/>
                        </div>  
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="city" placeholder="City" value={this.state.city} required="required"/>
                        </div>   
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="zip" placeholder="Zip Code" value={this.state.zip} required="required"/>
                        </div>          
                        <div className="form-group">
                            <label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                            <button type="submit"  className="btn btn-success btn-lg btn-block" onChange={this.onClick}>Register Now</button>
                        </div>
                        <div className="text-center" id="bottom">Already have an citizen account? <a href="/signin">Sign in</a></div>
                        <div className="text-center" id="bottom">Hospital administration registration? <a href="/administrativeSignUp">Sign Up</a></div>
                    </form>
                    
                </div>
            </div>
            <Footer/>
            </div>
               
        )
    }
}


