import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInputsValidaty, setFormInputValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const eneteredPostalCode = postalCodeInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const eneteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const eneteredPostalCodeIsValid = isFiveChars(eneteredPostalCode);

		setFormInputValidity({
			name: enteredNameIsValid,
			street: eneteredStreetIsValid,
			city: enteredCityIsValid,
			postalCode: eneteredPostalCodeIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			eneteredStreetIsValid &&
			enteredCityIsValid &&
			eneteredPostalCodeIsValid;

		if (formIsValid) {
		} else {
			return;
		}

		props.onConfirm({
			name: enteredName,
			street: enteredStreet,
			city: enteredCity,
			postalCode: eneteredPostalCode,
		});
	};

	const nameControlClasses = `${classes.control} ${
		formInputsValidaty.name ? '' : classes.invalid
	}`;
	const cityControlClasses = `${classes.control} ${
		formInputsValidaty.city ? '' : classes.invalid
	}`;
	const streetControlClasses = `${classes.control} ${
		formInputsValidaty.street ? '' : classes.invalid
	}`;
	const postalCodeControlClasses = `${classes.control} ${
		formInputsValidaty.postalCode ? '' : classes.invalid
	}`;

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputRef} />
				{!formInputsValidaty.name && <p>Please eneter a valid name.</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputRef} />
				{!formInputsValidaty.street && <p>Please eneter a valid street name.</p>}
			</div>
			<div className={postalCodeControlClasses}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalCodeInputRef} />
				{!formInputsValidaty.postalCode && (
					<p>Please eneter a valid postal code (5 character long).</p>
				)}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef} />
				{!formInputsValidaty.city && <p>Please eneter a valid city name.</p>}
			</div>
			<div className={classes.actions}>
				<button className={classes.cancel} type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
