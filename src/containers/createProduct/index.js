import React from "react";
import { products } from "../../productData";
import './create.css'

export default class CreateProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: products.length+1,
            name: '',
            description: '',
            cost: ''
        }
    }

    submitForm(){
        console.log(this.state)
        products.push(this.state)
        console.log(products)
        //if data empty cannot push
        //if id exists, not allowed
    }


    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <form action="" style={{display:'flex',flexDirection:'column'}}>
                    <label htmlFor="name">Name</label>

                    <input required id="name" type="text" placeholder="Product Name" onChange={(nameval) => {
                        this.setState({ name: nameval.target.value})
                    }} />



                    <label htmlFor="desc">Description</label>

                    <input required id="desc" type="text" placeholder="Product Description" onChange={(descval) => {
                        this.setState({ description: descval.target.value})
                    }} />


                    
                    <label htmlFor="price">Price</label>

                    <input required id="price" type="number" placeholder="Price" onChange={(costval) =>
                        this.setState({ cost: costval.target.value})
                    }/>

                    <button onClick={() => {this.submitForm()}}>Submit</button>
                </form>
            </div>
        )
    }
}