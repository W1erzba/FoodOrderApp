import React, { useState } from 'react';

import classes from './MealItem.module.css';

const MealItem = (props) => {
	const [foodAmount, setFoodAmount] = useState(1);
	const price = `$${props.price.toFixed(2)}`;

	const buttonHandler = (event) => {
		event.preventDefault();
		setFoodAmount((prevState) => prevState + event.target.value);
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<form>
					<label>
						Amount
						<input type='number'></input>
					</label>
					<button
						type='submit'
						onClick={buttonHandler}
						value={foodAmount}>
						Add to cart
					</button>
				</form>
			</div>
		</li>
	);
};

export default MealItem;
