import React, {Component} from 'react';
import Filter from './Filter.js';
import ProductTable from './productTable.js';
import ProductForm from './productForm.js';

let PRODUCTS = {
    '1': {id: 1, category: 'Ball', price: '$39.99', name: 'Cricket'},
    '2': {id: 2, category: 'Ball', price: '$50', name: 'SoccerBall'},
    '3': {id: 3, category: 'Car', price: '$20,000', name: 'Convertible'},
    '4': {id: 4, category: 'Car', price: '$15,000', name: 'Sedan'},
    '5': {id: 5, category: 'Musical Instrument', price: '$500', name: 'Piano'},
    '6': {id: 6, category: 'Musical Instrument', price: '$300', name: 'Guitar'}
    
 };
 

class Product extends Component{
  constructor(props){
        super(props)
        this.state = {
        filterText : '' ,
            products : PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }
   
    /* state = {
    // filterText : '' ,
     products : PRODUCTS
   } */

   handleFilter(filterInput) {
    this.setState(filterInput)
}

   handleSave(product) {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    // adding new product to the list and  returning new product list
    this.setState((prevState) => {
         let products = prevState.products
         products[product.id] = product
         return { products }
    });
}
//deleting product  and  returning new product list
    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        });
    }


    render(){
        return(
            <div className = "container">
                <h1>My Inventory</h1>
                <Filter onFilter={this.handleFilter}  />
                <ProductTable 
                     filterText={this.state.filterText} 
                     products={this.state.products} 
                     onDestroy={this.handleDestroy} />
                <ProductForm onSave={this.handleSave}  />
            </div>
        );
    }
}

export default Product;