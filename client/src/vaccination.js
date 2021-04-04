import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class vaccination extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            age:'',
            diseases:'',
            coronaVictim:'',
            bloodGroup:''
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
        this.setState({
            age:'',
            diseases:'',
            coronaVictim:'',
            bloodGroup:''
        })
        
       
       
    };
    render() {
        
        return (
            <div>
              
                    <Navbar/>
               
                 
                <div className="container">
                        <div className="signup-form">
                    <form action="/checkEligibility" method="post">
                        <h4>Check whether you are eligible to take the vaccine or not</h4>
                       
                        <div className="form-group">
                            <div className="row">
                                <div className="col"><input type="text" className="form-control" onChange={this.onChange} name="age" placeholder="Your Age" value={this.state.age} required="required"/></div>
                                <div className="col"><input type="text" className="form-control" onChange={this.onChange} name="diseases" placeholder="Diseases" value={this.state.diseases} required="required"/></div>
                            </div>        	
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="coronaVictim" placeholder="Fill Yes if u already had covid or else No " value={this.state.coronaVictim} required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} name="bloodGroup" placeholder="BloodGroup" value={this.state.bloodGroup} required="required"/>
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


