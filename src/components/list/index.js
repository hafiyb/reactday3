import React from "react";
import { Link } from "react-router-dom";




export default class List extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
                <div style={{minHeight:'15vh',width:'100vw',borderBottom:'1px solid black', display:'flex',flexDirection:'row'}}>
                    <div style={{backgroundColor:'black',height:'100%',width:'200px'}}>
                        <img src={this.props.image} alt="" style={{height:'100%', width:'100%'}} />
                    </div>
                    <Link to={{
                pathname: `/dashboard/${this.props.id}`,
                state: this.props.carData
                }}>
                    <div style={{margin:'0 20px',display:'flex',flexDirection:'column', justifyContent:'space-evenly'}}>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.cost}</p>
                        <p>{this.props.short}</p>
                    </div>
                    </Link>
                </div>
            
        )
    }

}