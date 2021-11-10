import React from "react";
import { products } from "../../productData"
import List from "../../components/list";
import { Link } from "react-router-dom";



export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : ''
        }
    }

    render(){
        console.log(products)
        return(
            <div>
                <div style={{height:'70px' ,display:'flex',flexDirection:'row', justifyContent:'space-between' , backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center',padding:' 0 50px'}}>
                    <Link to="/create">Create New Product</Link>
                    <input type="text" style={{height:'80%'}} placeholder="search" onChange={(search) => {
                        this.setState({search : search.target.value})
                    }}/>
                </div>
                {products.map(item =>{

                    var regex = new RegExp(this.state.search, 'gi')

                    if(item.name.match(regex) != null || this.state.search == ''){
                        return(
                            <List carData={item} name={item.name} image={item.image} short={item.short_description} cost={item.cost} id={item.id}  />
                        )
                    } 

                })}
            </div>
        )
    }
}