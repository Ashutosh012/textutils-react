import React, {useState} from 'react';

export default function TextForm(props){
	const handleSenClick = () => {
		let newText =  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
		setText(newText);
	}

	const handleTitleClick = () => {
		let newText =  text.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
		setText(newText);
	}

	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
	}

	const handleOnChange = (event) => {
		setText(event.target.value)
	}

	const handleLowClick = (event) => {
		let newText = text.toLowerCase();
		setText(newText);	
	}

	const handleClearClick = (event) => {
		let newText = '';
		setText(newText);
	}

	const [text, setText] = useState('');
	return (
		<>
			<div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
				<div className="mb-3">
					<h1>{props.heading}</h1>
					<textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray':'white', color: props.mode === 'dark' ? 'white':'black'}} rows="8"></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleSenClick}>Sentance case</button>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
				<button className="btn btn-primary mx-2" onClick={handleLowClick}>lowercase</button>
				<button className="btn btn-primary mx-2" onClick={handleTitleClick}>Title Case</button>
				<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
			</div>

			<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
				<h1>Your text summary</h1>
				<p>{text.split(" ").length} words and {text.length} characters</p>
				<h3>Preview</h3>
				<p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
			</div>
		</>
	)
}