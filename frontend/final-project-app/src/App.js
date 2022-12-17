import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

//import components
import Appbar from './components/Appbar';
import Homepage from './components/Homepage';
import Theater from './components/Theater';
import Eventpage from './components/Eventpage';
import Test from './components/Test';

function App() {

	const [headerChoice, setHeaderChoice] = useState(false);

	return (
		<div className="app-container"> 
			<Router>
				<Appbar headerChoice={headerChoice} setHeaderChoice={setHeaderChoice}/>

				<Routes>
					<Route exact path="/" element={<Homepage/>}/>
					<Route exact path="/theater" element={<Theater/>}/>
					<Route exact path="/event" element={<Eventpage/>}/>
					<Route exact path="/test" element={<Test/>}/>
					
				</Routes>
			</Router>
			
		</div>
	);
}

export default App;
