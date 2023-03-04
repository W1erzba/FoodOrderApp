import { Fragment } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from '../Layout/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	return (
		<Fragment>
			<button
				className={classes.button}
				onClick={props.onClick}>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>69</span>
			</button>
		</Fragment>
	);
};

export default HeaderCartButton;
