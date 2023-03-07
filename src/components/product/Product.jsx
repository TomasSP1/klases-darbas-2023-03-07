import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.items)

    return (
        <div className='product_list'>
            {
                props.items.map((item, index)=> (
                    <div key={index} className='one_item'>
                        <h4>{item.name}</h4>
                        <img src={item.imageUrl} alt="" />
                        <p>{item.description}</p>
                        <p className='price'>Price: {item.price}$</p>
                        <p className='stock'>Stock: {item.countInStock} left</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Product