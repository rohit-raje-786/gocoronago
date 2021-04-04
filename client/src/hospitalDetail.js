import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export class hospitalDetail extends Component {
    constructor(props)
    {
        super(props)
        this.state=({
            vaccine:'',
            citizen:''
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
            vaccine:this.state.vaccine,
            citizen:this.state.citizen
       })}).then(this.setState({
           vaccine:'',
           citizen:''
       }))
        
         
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                <div className="signup-form">
                    <form action="" method="post">
                        <h4>Add Hospital Details</h4>
                       
                        <div className="form-group">
                            <div className="row">
                                <div className="col"><input type="text" className="form-control" onChange={this.onChange} name="age" placeholder="No Vaccine Available" value={this.state.vaccine} required="required"/></div>
                                <div className="col"><input type="text" className="form-control" onChange={this.onChange} name="diseases" placeholder="No of Citizen Enroll" value={this.state.citizen} required="required"/></div>
                            </div>        	
                        </div>
                       
                        
                        <div className="form-group">
                            <button type="submit"  className="btn btn-success btn-lg btn-block" onChange={this.onClick}>Check</button>
                        </div>
                        
                        
                    </form>
                    
                </div>
        
                </div>
                <Footer/>
            </div>
        )
    }
}

export default hospitalDetail
