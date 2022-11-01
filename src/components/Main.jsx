const Main = () => {
	return (
		<>
			<main>
				<form
					method='post'
					action='https://freecodecamp.org/practice-project/accessibility-quiz'
				>
					<section role='region' aria-labelledby='student-info'>
						<h2 id='student-info'>Student Info</h2>
						<div className='info'>
							<label for='name'>Name:</label>
							<input
								name='student-info'
								placeholder='text'
								id='name'
								type='text'
							></input>
						</div>
						<div className='info'>
							<label for='email'>Email:</label>
							<input
								name='student-email'
								placeholder='text'
								id='email'
								type='email'
							></input>
						</div>
						<div className='info'>
							<label for='date'>D.O.B.:</label>
							<input
								name='birthday'
								placeholder='text'
								id='date'
								type='date'
							></input>
						</div>
					</section>
					<section role='region' aria-labelledby='html-questions'>
						<h2 id='html-questions'>HTML</h2>
					</section>
					<section role='region' aria-labelledby='css-questions'>
						<h2 id='css-questions'>CSS</h2>
					</section>
				</form>
			</main>
		</>
	);
};

export default Main;
