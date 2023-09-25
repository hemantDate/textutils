import React, { useState } from 'react'


export default function Form(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase", "success")
    }
    const removeSpace = () => {
        let newText = text.replace(/[ ]+/g, ' ');
        setText(newText)
        props.showAlert("Removed spaces", "success")
    }
    const Clear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared", "success")
    }
    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        // print(text.length );'p[-]
        text.value.length === 0 ? props.showAlert("description box is empty", "warning") : props.showAlert("copied to clipboard", "success")
    }
    const handlelowclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase", "success")
    }
    const handle = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="grid gap-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="p-2 g-col-6">
                    <h1 >{props.heading} </h1>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                </div>

                <div className="p-2 g-col-6">
                    <textarea id="myBox" rows="3" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handle} className="form-control" placeholder=" description" />
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeSpace}>Remove extra-spaces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={Clear}>Clear inut</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy text</button>
                <div className="container">
                    <h2>summary</h2>
                    <p> {text.length} {`haracters wraped in ${text.split(" ").length} words`}</p>
                    <p>Can be read in {text.split("").length * 0.008} minutes</p>
                    <h2>Preview the text</h2>
                    <p>{text.length > 0 ? text : "Enter text above"}</p>
                </div>
            </div>
        </>
    )
}
