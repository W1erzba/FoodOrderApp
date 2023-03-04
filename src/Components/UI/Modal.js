import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
	return (
		<div
			className={classes.backdrop}
			onClick={props.onClose}></div>
	);
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;

/*  Personal notes:

	Corect  React portal ussage:
	#1. You have to create an DOM element (container for portal) in real Dom with id eg. <div id='modal'></div>

	#2.	Next create component with has ReactDOM imported from 'react-dom'.

	#3. Create there what ever function you want to create.

	#4. Create dynamic object {ReactDOM.createPortal(<Component />, Div cointainer (eg. (<Backdrop />, document.getElementById('modal')) ))}

	#5. Use that Component in App and and what ever functionality you want to.

	#6. Good practice - use it with Fragment to avoid div soup.
*/
