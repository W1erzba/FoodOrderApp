import { Fragment } from 'react';

import HeaderCartButton from '../Layout/HeaderCartButton';
import food from '../../assets/food.jpg';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Everyone favorite place😊</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={food} alt='a table full of delicious food!' />
			</div>
		</Fragment>
	);
};

export default Header;
