import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Route,
	Routes	
  } from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null);
		},3000);
	}

	const toogleMode = () => {
		if(mode === 'light'){
			setMode('dark');
			document.body.style.backgroundColor = 'gray';
			showAlert("Dark mode has been enabled", "success");
			document.title = 'TextUtils - Dark Mode';
			setInterval(() => {
				document.title = 'TextUtils is amazing mode';
			},2000);
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert("Light mode has been enabled", "success");
			document.title = 'TextUtils - Light Mode';
			setInterval(() => {
				document.title = 'Install TextUtils Now';
			},1500);
		}
	}
  return (
    <>
	<Router>
    {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
    <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
	<Alert alert={alert} />
	
    <div className="container">
		<Routes>
			<Route path="/about" element={<About />}></Route>
			<Route path="/" element={<TextForm heading="enter the text to analyze" mode={mode} />}></Route>
		</Routes>
    </div>
	</Router>
    </>
  );
}

export default App;
