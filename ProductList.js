import React, { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { itemContext } from '../context/ItemContext';

const ProductList = () => {
	const { products } = useContext(itemContext);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [selectedType, setSelectedType] = useState('all');

	useEffect(() => {
		setSortedProducts([...products]);
	}, [products]);

	const handleSortByPrice = () => {
		const sorted = [...sortedProducts].sort((a, b) => parseFloat(a.totalPrice || 0) - parseFloat(b.totalPrice || 0));
		setSortedProducts(sorted);
	};

	const handleFilterByPriceRange = () => {
		const min = parseFloat(minPrice) || 0;
		const max = parseFloat(maxPrice) || Infinity;

		const filtered = products.filter(product => {
			const price = product.totalPrice ? parseFloat(product.totalPrice.replace(/[^\d.]/g, '')) : 0;
			return price >= min && price <= max;
		});
		setSortedProducts(filtered);
	};

	const handleFilterByType = () => {
		if (selectedType === 'all') {
			setSortedProducts([...products]);
		} else {
			const filtered = products.filter(product => product.type === selectedType);
			setSortedProducts(filtered);
		}
	};

	return (
		<div className='prdt-list'>
			<h2>Tour List</h2>
			<div className='filter-btn'>
				<button id="hey" onClick={handleSortByPrice}>
					Sort by Price
				</button>
				<label>
					Min Price:
					<input id="h" type='number' value={minPrice}
						onChange={(e) => setMinPrice(e.target.value)} />
				</label>
				<label>
					Max Price:
					<input id="h" type='number' value={maxPrice}
						onChange={(e) => setMaxPrice(e.target.value)} />
				</label>
				<button id="hey1" onClick={handleFilterByPriceRange}>
					Filter by Price Range
				</button>
				<label>
					Filter by Type:
					<select id="hey" value={selectedType}
						onChange={(e) => setSelectedType(e.target.value)}>
						<option value='all'>All</option>
						<option value='India'>India</option>
						<option value='World'>World</option>
					</select>
				</label>
				<button id="hey1" onClick={handleFilterByType}>
					Filter by Type
				</button>
			</div>

			<ul className='item-card'>
				{sortedProducts.map((product) => (
					<ProductItem key={product._id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default ProductList;
