import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg"


export default class Blog extends React.Component{
    render(){
        return(
            <div style={{height:'80px',width:'100vw',backgroundColor:'black',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Link to="/dashboard"><img src={Logo} style={{width:'80px',height:'80px'}} alt="" /></Link>
            </div>
        )
    }
}