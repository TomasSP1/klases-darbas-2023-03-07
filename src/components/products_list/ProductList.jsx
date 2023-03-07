import React from 'react';
import Product from '../product/Product';
import './ProductList.css';




import data from '../../data/data';




const ProductList = () => {
    console.log(data, "tevinis elementas");
    return (
        <div>
            <Product items={data}/>
        </div>
    )
}

export default ProductList