import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export class saintgHp extends Component {
    constructor(props)
    {
        super(props);
        this.state=({
          
            email:''
         
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
       this.setState({
            
            email:''
            
        })
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <br/>
                <div className="jumbotron">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2kzWAaPTLmEw0CESRGZ_pFrFlaJ_Uu9m6yw&usqp=CAU"/>
                    <br/>
                    <p className="lead">Welcome to Saint George Hospital</p>
                    <hr className="my-4"/>
                    <h3>Timing for Vaccination Doses</h3>
                    <form action="/sendmail" method="post">
                        <p>Morning Timing:10:00 to 12:30</p>
                        <p>Evening Timing:5:00 to 7:30</p>
                        <div className="form-group col-5 ">
                        <label for="inputAddress">Enter your EmailId to confirm the vaccine registertion</label>
                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange}/>
                        </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <br/>
                    <p>After entering your emailId you will recieve the mail from the hospital regarding the timeslot assign to you.</p>
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default saintgHp
