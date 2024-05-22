//context/ItemContext.js

import {
	createContext,
	useEffect,
	useState
} from 'react';

const itemContext = createContext();

function CustomItemContext({ children }) {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [itemsInCart, setItemsInCart] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		const fetchData = async () => {
			const response =
				await fetch('http://localhost:5000/api/products');
			const products = await response.json();
			setProducts(products);
		};

		fetchData();
	}, []);

	const addToCart = (product) => {
		setTotalPrice(totalPrice + product.price)
		setCart([...cart, product]);
		setItemsInCart(itemsInCart + 1);
	};

	const removeFromCart = (product) => {
		const index =
			cart.findIndex(
				(prdt) =>
					prdt._id === product._id);
		console.log(index);

		if (index !== -1) {
			
			const updatedCart = [...cart];
			updatedCart.splice(index, 1);
			setTotalPrice(totalPrice - cart[index].price);
			setCart(updatedCart);
			setItemsInCart(itemsInCart - 1);
		} else {
			console.log("Item not found in the cart");
		}
	};

	return (
		<itemContext.Provider value={
			{
				products, addToCart,
				removeFromCart,
				itemsInCart, totalPrice
			}}>
			{children}
		</itemContext.Provider>
	);
}

export { itemContext };
export default CustomItemContext;
