import React, { Component } from 'react'
import axios from "axios"

 class AddProduct extends React.Component {
constructor (){
    super();
   this.state = {

        title : "",
        description : "",
        writer : "",
        quantity : "",
        price : "" 
    }
}
   

    handleInput = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    saveContent = async (e) =>{
        e.preventDefault();
        const res = await axios.post("Product", this.state);

        this.setState({        
        title : "",
        description : "",
        writer : "",
        quantity : "",
        price : "" });

        if(res.data.status === 200)
        {
            this.props.history.push("/AllProducts")
            res.data.status = 0;
        }
       
    }
    render() {
        return (
          
            <div className="content-wrapper" >
                  <br></br>
            <section className="content">
                <div className="container-fluid">
            <div className="row">
            <div className="col-md-6">
            <div className="card card-primary">
                <div className="card-header">
                <h3 className="card-title">Quick Example</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form role="form" onSubmit={this.saveContent}>
                <div className="card-body">
                    <div className="form-group">
                   
                    <input type="text" name="title" className="form-control" value={this.state.title}  onChange={this.handleInput}   required></input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="description" className="form-control" value={this.state.description}  onChange={this.handleInput}   required></input>
                   </div>

                   <div className="form-group">
                        <input type="text" name="writer" className="form-control" value={this.state.writer}  onChange={this.handleInput}   required></input>
                   </div>

                   <div className="form-group">
                        <input type="number" name="quantity" className="form-control" value={this.state.quantity}  onChange={this.handleInput}   required></input>
                   </div>

                   <div className="form-group">
                        <input type="number" name="price" className="form-control" value={this.state.price}  onChange={this.handleInput}   required></input>
                   </div>
                    {/* <div className="form-group">
                    <label htmlFor="exampleInputFile">File input</label>
                    <div className="input-group">
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                        </div>
                        <div className="input-group-append">
                        <span className="input-group-text" id>Upload</span>
                        </div>
                    </div>
                    </div> */}
                  
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="submit"  value="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
            </div>
            </div>
            </div>
            </section>
            </div>
        )
    }
}
export default AddProduct;
