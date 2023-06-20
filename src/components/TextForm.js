import React, { useState } from 'react'


export default function TextForm(props) {
  const hendleUpClick = () => {
    // console.log("UpperClick Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    // setText("You have clicked on handleUpClick")
    props.showAlert("Converted to UpperCase", "success")
  }

  const hendleLoClick = () => {
    // console.log("LowerClick Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    // setText("You have clicked on handleLoClick")
    props.showAlert("Converted to LowerCase", "success")
  }

  const hendleClearClick = () => {
    // console.log("ClearClick Was Clicked" + text);
    let newText = "";
    setText(newText)
    // setText("You have clicked on hendleClearClick")
    props.showAlert("Clear All Text", "success")
  }

  const hendleCopyClick = () => {
    // console.log("ClearClick Was Clicked" + text);
    const text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    // setText("You have clicked on hendleClearClick")
    props.showAlert("Copy To Keybord", "success")
  }

  const hendleRemoveClick = () => {
    // console.log("ClearClick Was Clicked" + text);
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    // setText("You have clicked on hendleClearClick")
    props.showAlert("Extra all space Removed", "success")
  }

  const hendleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  // setText("Dharmik");
  return (
    <>
      <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={hendleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} id="MyBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={hendleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={hendleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={hendleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={hendleCopyClick}>Copy Text to KeyBord</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={hendleRemoveClick}>Extra Space Remove</button>
      </div>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  )
}
