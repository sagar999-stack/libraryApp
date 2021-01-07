import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Nav from './Nav';
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Products from "./Products";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct"


function Example() {
    return (
      <Router>
          <>
          <Nav/>
          <Sidebar/>
            <Switch>
              
                <Route path="/AllProducts" exact component={Products}></Route>
                <Route path="/AddProduct" exact component={AddProduct}></Route>
                <Route path="/edit/:id" exact component={EditProduct}></Route>
            </Switch>
           
            <Footer/>
          </>
      </Router>
   
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
