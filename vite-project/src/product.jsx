// import React from 'react';
// import './ProductCard.css'; // Optional CSS for styling

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-name">{product.title}</h2>
            <p className="product-price">${product.price}</p>
        </div>
    );
}

export default ProductCard;
