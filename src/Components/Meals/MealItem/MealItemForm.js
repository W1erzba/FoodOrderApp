import React, { useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
	const [foodAmount, setFoodAmount] = useState(1);

	const buttonHandler = (event) => {
		event.preventDefault();
		setFoodAmount((prevState) => prevState + event.target.value);
	};

	return (
		<form className={classes.form}>
			<Input
				label='Amount'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button
				className={classes.form}
				type='submit'
				onClick={buttonHandler}
				value={foodAmount}>
				+Add
			</button>
		</form>
	);
};

export default MealItemForm;
