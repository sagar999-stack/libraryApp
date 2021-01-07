import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

export default class Product extends Component {

    delProduct = (id) => {
        this.props.deleteProduct(id); 
    }

    fetchProducts = async () => {
        const res = await axios.get("/Product");
        if(res.data.status === 200){
            this.setState({products:res.data.products});
        
            this.setState({loading: false});
        }
     }

    componentDidMount(){
        this.fetchProducts();
    }
     deleteProduct = async (id) => {
        
         const res = await axios.delete(`/Product/${id}`);
         const res2 = await axios.get(`/Product/${id}`);
         if(res2.data.status === 200){
            // json(['status'=201]);
            this.props.history.push("/AllProducts");
            res.data.status = 0;
         }
        
     }
    render() {
        const {product} = this.props;
      
        return (
           

                <tbody>
                    <tr>
                    <td> {product.id} </td>
                        <td>{product.title} </td>
                        <td>{product.writer} </td>
                        <td>{product.description} </td>
                        <td>{product.quantity} </td>
                        <td>{product.price} </td>
                        <td><Link type="button" to={`/edit/${product.id}`} className="btn btn-block btn-warning btn-sm"> Edit</Link>  </td>
                        <td><a type="button" onClick={() => this.deleteProduct(product.id)} className="btn btn-block btn-danger btn-sm"> Delete</a>  </td>
                    </tr>
                </tbody>
             
        )
    }
}
