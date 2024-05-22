import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';

const ProductDetails = () => {
    const { products } = useContext(itemContext);
    const product = products[0]; 

    return (
        <div>
             
            {product && (
                <div className='tra'>
                    <h2 class="details">Details of Tour</h2>
                    <ul className='fit'>
                    <li><p>Day-Night Mode: {product.dayNightMode}</p></li>
                    <li><p>Total Price per Person: {product.totalPrice}</p></li>
                    <li><p>Mode of Travel: {product.mode}</p></li>
                    </ul>
                    <div className='day'>
                        <ul>
                            <li><p id="day1"> {product.day1}</p></li>
                            <li><p id="day1"> {product.day2}</p></li>
                            <li><p id="day1"> {product.day3}</p></li>
                            <li><p id="day1"> {product.day4}</p></li>
                            <li><p id="day1"> {product.day5}</p></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
