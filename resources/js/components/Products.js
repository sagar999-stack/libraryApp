import React, { Component } from 'react'
import axios from 'axios'
import Product  from './Product';
export default class Products extends Component {

    state = {
        products: [],
        loading:true,
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
        if(res.data.status === 200){
            this.fetchProducts();
        }
    }
    render() {
      
        // console.log(this.state.products);
        return (
            <div className="content-wrapper" >
            <br></br>
              <section className="content">
                 <div className="container-fluid">
                   <div className="card">
                       <div className="card-header border-transparent">
                            <h3 className="card-title">Latest Orders</h3>
                           <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times" />
                            </button>
                          </div>
                        </div>
            {/* /.card-header */}
                        <div className="card-body p-0">
                          <div className="table-responsive">
                               <table className="table m-0">
                                    <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Book name</th>
                                        <th>Writer</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                
                                        {(this.state.products).map(product=>(
                                    <Product product = { product} key = {product.id} delete = {this.deleteProduct()}/>
                                ))}
                                </table>
                        </div>
                {/* /.table-responsive */}
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
                <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
            </div>
            {/* /.card-footer */}
            </div>
            </div>
            </section>
            </div>

        
         
        
        )
    }
}
