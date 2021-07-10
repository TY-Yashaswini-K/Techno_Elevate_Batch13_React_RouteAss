import React, { Component } from 'react'
import Navigation2 from '../navigation/Navigation2'
import Back from '../success/Back'

export default class Logout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display: false
        }
    }

    Nav2 = ()=>{
        this.setState({
            display: true
        })
    }

    render() {
        
        return (
            <div>
                {this.state.display ? <Back/> :

                <div> 
                <Navigation2/>
                <h1 >Logout</h1><br/>
                <button className="btn btn-outline-warning" onClick={this.Nav2}>Logout</button>

                </div>

    }
            </div>
        )
    }
}
