import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
      const spokenText = event.results[0][0].transcript;
      setText(spokenText);
    };

    recognition.start();
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const wordCount = (text) => {
    if (!text.trim()) {
      return 0; // Return 0 if there is no text input
    }
    
    // Split text into words using regular expression
    let regex = /\s+\S+/;
    let numOfWords = text.split(regex);
    
    // Return the number of words
    return numOfWords.length;
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  return (
    <>
    <div className='container my-3'>
      <h1>{props.enterText}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value = {text} id="mybox" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">Uppercase</button>
        <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2">Lowercase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Read</button>
        <button type="button" onClick={handleVoiceInput} className="btn btn-warning mx-2 my-2">Voice Type</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary.</h2>
      <p>{wordCount(text)} words and {text.length} characters</p>
      <h3>Your preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
