import { Fragment } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from '../Layout/HeaderCardButton.module.css';

const HeaderCartButton = (props) => {
	return (
		<Fragment>
			<button className={classes.button}>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>7</span>
			</button>
		</Fragment>
	);
};

export default HeaderCartButton;