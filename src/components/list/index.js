import React from "react";
import { Link } from "react-router-dom";

import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'



export default class List extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
                <div style={{minHeight:'15vh',width:'100vw',borderBottom:'1px solid black', display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <div style={{backgroundColor:'black',minHeight:'15vh',width:'200px'}}>
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