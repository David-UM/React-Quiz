import './../styles/Main.css';

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
							<input name='student-info' id='name' type='text'></input>
						</div>
						<div className='info'>
							<label for='email'>Email:</label>
							<input name='student-email' id='email' type='email'></input>
						</div>
						<div className='info'>
							<label for='date'>
								D.O.B.: <span className='sr-only'>(Date of Birth)</span>
							</label>
							<input name='birthday' id='date' type='date'></input>
						</div>
					</section>
					<section role='region' aria-labelledby='html-questions'>
						<h2 id='html-questions'>HTML</h2>
						<div className='question-block'>
							<p>1</p>
							<fieldset name='1' className='question'>
								<legend>yes/no</legend>
								<ul className='question'>
									<li>
										<label>
											<input id='q1-a1' type='radio'></input>
										</label>
									</li>
									<li>
										<label>
											<input id='q1-a2' type='radio'></input>
										</label>
									</li>
								</ul>
							</fieldset>
						</div>
						<div className='question-block'>
							<p>1</p>
							<fieldset name='2' className='question'>
								<legend>true/false</legend>
								<ul className='question'>
									<li>
										<label>
											<input id='q2-a1' type='radio'></input>
										</label>
									</li>
									<li>
										<label>
											<input id='q2-a2' type='radio'></input>
										</label>
									</li>
								</ul>
							</fieldset>
						</div>
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
