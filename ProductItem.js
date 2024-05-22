import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { itemContext } from '../context/ItemContext';

const ProductItem = ({ product }) => {
    const { addToCart, removeFromCart } = useContext(itemContext);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleRemoveToCart = (product) => {
        removeFromCart(product);
    };

    return (
        <div className="product-card">
            <Link to={`/product-details/${product.id}`}>
                <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                />
            </Link>
            <div className="product-details">
                <h3 style={{ fontWeight: "700", color:"white" }}>
                    {product.name}
                </h3>
                <p style={{ fontWeight: "400" }}>
                    {product.description}
                </p>
                <button id="hey" onClick={() => handleAddToCart(product)}>
                    Add to List
                </button>
                <br />
                <button id="hey" onClick={() => handleRemoveToCart(product)}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
