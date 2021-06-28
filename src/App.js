import logo from './logo.svg';
import './App.css';
import Header from './views/header/Header';

function App() {
  return (  
<div className="Main">   
		<div class="row" className="Header">
			<div class="col-lg-12"> 
				<Header />
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12"> 
				<div className="App">
					<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
						<p>
						Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
						className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
						Learn React
						</a>
					</header>
				</div>
			</div>
		</div>
</div>
  );
}
export default App;
