import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

//import components
import Appbar from './components/Appbar';
import Homepage from './components/Homepage';
import Theater from './components/Theater';


function App() {

	const [headerChoice, setHeaderChoice] = useState(false);

	return (
		<div className="app-container"> 
			<Router>
				<Appbar headerChoice={headerChoice} setHeaderChoice={setHeaderChoice}/>

				<Routes>
					<Route exact path="/" element={<Homepage/>}/>
					<Route exact path="/theater" element={<Theater/>}/>
				</Routes>
			</Router>
			
		</div>
	);
}

export default App;
