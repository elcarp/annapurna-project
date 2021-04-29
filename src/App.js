import annapurna from './annapurna.jpg'
import './App.css'

function annapurnaSays() {
	alert('Meow!')
}

function App() {
	return (
		<div className='App'>
			<div>
				<img
					src={annapurna}
					className='App-logo'
					alt='logo'
					onClick={() => annapurnaSays()}
				/>
				<h2>
					Hi! My name is <strong>Annapurna</strong> and I'm a persian cat.
				</h2>
			</div>
		</div>
	)
}

export default App
