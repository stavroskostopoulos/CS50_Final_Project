import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

//import components
import Appbar from './components/Appbar';
import Homepage from './components/Homepage';



function App() {

	const [headerChoice, setHeaderChoice] = useState(false);

	return (
		<div className="app-container"> 
			<Router>
				<Appbar headerChoice={headerChoice} setHeaderChoice={setHeaderChoice}/>

				<Routes>
					<Route exact path="/" element={<Homepage/>}/>
				</Routes>
			</Router>
			
		</div>
	);
}

export default App;
