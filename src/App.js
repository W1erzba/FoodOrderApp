import { Fragment, useState } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const shownCartHandler = (evnet) => {
		setCartIsShown(true);
	};

	const hideCartHandler = (evnet) => {
		setCartIsShown(false);
	};

	return (
		<Fragment>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={shownCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
