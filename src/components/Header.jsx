import './../styles/Header.css';
import Nav from './Nav';

const Header = () => {
	return (
		<>
			<header>
				<img
					src='https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg'
					id='logo'
					alt='image'
				/>
				<h1>HTML/CSS Quiz</h1>
				<Nav></Nav>
			</header>
		</>
	);
};

export default Header;
