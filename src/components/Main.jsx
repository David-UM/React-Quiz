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
										<label for='q1-a1'>
											<input
												name='q2'
												value='True'
												id='q1-a1'
												type='radio'
											></input>
											True
										</label>
									</li>
									<li>
										<label for='q1-a2'>
											<input
												name='q2'
												value='False'
												id='q1-a2'
												type='radio'
											></input>
											False
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
										<label for='q2-a1'>
											<input
												name='q1'
												value='True'
												id='q2-a1'
												type='radio'
											></input>
											True
										</label>
									</li>
									<li>
										<label name='q2' for='q2-a2'>
											<input
												name='q1'
												value='False'
												id='q2-a2'
												type='radio'
											></input>
											False
										</label>
									</li>
								</ul>
							</fieldset>
						</div>
					</section>
					<section role='region' aria-labelledby='css-questions'>
						<h2 id='css-questions'>CSS</h2>
						<div className='formrow'>
							<div className='question-block'>
								<label for='customer'>Are you a frontend developer?</label>
							</div>
							<div className='answer'>
								<select name='customer' id='customer' required>
									<option value=''>Select an option</option>
									<option value='yes'>Yes</option>
									<option value='no'>No</option>
								</select>
							</div>
							<div className='question-block'>
								<label for='css-questions'>Do you have any questions:</label>
							</div>
							<div className='answer'>
								<textarea
									id='css-questions'
									name='css-questions'
									rows='5'
									cols='24'
									placeholder='Who is flexbox...'
								></textarea>
							</div>
						</div>
					</section>
					<button type='submit'>Submit</button>
				</form>
			</main>
		</>
	);
};

export default Main;
