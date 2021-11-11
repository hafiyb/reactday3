import React from "react";
import Classes from './details.module.css'

export default class Details extends React.Component{
    constructor(props){
        super(props)

        this.data = this.props.location.state


    }

    // newMap(){
    //     this.data.bullet_description.map(bullet => {
    //         return <li>{bullet}</li>
    //     })
    // }

    render(){
        return(
            <div style={{display:'flex',flexDirection:'row'}}>
                <div className={Classes.product_img}></div>
                <div style={{
                    backgroundColor:'black',
                    minWidth:'25vw',
                    minHeight:'25vh',
                }}>
                <img src={this.data.image} style={{width:'100%'}} alt="" />
                </div>
                
                <div style={{padding:'50px', width:'auto'}}>
                    <h1>{this.data.name}</h1>
                    <h4 style={{margin:'50px 0'}}>{this.data.short_description}</h4>
                    <ul>
                        {this.data.bullet_description.map(bullet => {
                            return <li style={{margin:'10px', borderBottom:'2px solid black'}}>{bullet}</li>
                        })}
                    </ul>
                    {/* <p>{this.data.bullet_description}</p> */}

                    <h2 style={{margin:'50px 0 0 0'}} >Price: {this.data.cost}</h2>
                    <button>Buy now</button>
                </div>
            </div>
        )
    }
}