import './../styles/Nav.css';

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<a acceskey='a' href='#student-info'>
							INFO
						</a>
					</li>
					<li>
						<a acceskey='h' href='#html-questions'>
							HTML
						</a>
					</li>
					<li>
						<a acceskey='c' href='#css-questions'>
							CSS
						</a>
					</li>
				</ul>
				acceskey=""
			</nav>
		</>
	);
};

export default Nav;
