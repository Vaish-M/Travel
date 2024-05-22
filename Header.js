import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { itemContext } from '../context/ItemContext';

const Header = () => {

	const { itemsInCart } = useContext(itemContext)

	return (
		<div className='header' >
			<h1 className='dark'>
				Welcome to Vaish Tour Package
			</h1>
			
			
			<div className='cart-num'>
				<div className='cart-items'>
					{itemsInCart}
				</div>
				<FontAwesomeIcon icon={faCartShopping} size="4x" />
			</div>
		</div>
	);
};

export default Header;
