import React from "react";

import { Link } from "react-router-dom";

export default class Login extends React.Component{
    render(){
        return(
            <div style={{width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-around',alignItems:'center', backgroundColor:'yellow'}}>
                <div style={{textAlign:'center'}}>
                    <h1>
                        Login page
                    </h1>
                        <input type="text" placeholder="Name"/>
                        <br/>
                        <input type="text" placeholder="Email"/>
                        <br/>
                        <button>
                            <Link to="/dashboard"> Using Link </Link>
                        </button>
                    
                </div>
            </div>
        )
    }
}