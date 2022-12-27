import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

//import components
import Appbar from './components/Appbar';
import Homepage from './components/Homepage';
import Theater from './components/Theater';
import Eventpage from './components/Eventpage';
import Music from './components/Music';
import Cinema from './components/Cinema'
import Moviepage from './components/Moviepage';
import Sports from './components/Sports'

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
					<Route exact path="/music" element={<Music/>}/>
					<Route exact path="/cinema" element={<Cinema/>}/>
					<Route exact path="/sports" element={<Sports/>}/>
					<Route exact path="/event/:id" element={<Eventpage/>}/>
					<Route exact path="/movie/:id" element={<Moviepage/>}/>
					<Route exact path="/test" element={<Test/>}/>
					
				</Routes>
			</Router>
			
		</div>
	);
}

export default App;
