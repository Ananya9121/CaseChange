import React, { useState } from "react";

export default function Form(props) {
  const HandleClickUp = () => {
    console.log("clicked!");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase.", "success");
  };

  const HandleClickLow = () => {
    console.log("clicked!");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase.", "success");
  };

  const HandleClickCopy = () => {
    var copyText = document.getElementById("textinput");
    copyText.select();
    // console.log(copyText.value);

    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied.", "success");

  };

  const HandleClickSpeak = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking.", "success");

  };

  const HandleClickClear = () => {
    console.log("clicked!");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared.", "success");
  };

  const HandleChangeUp = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  let words = text.trim(); // trim out useless spaces
  let word_length;
  if (words.length === 0) {
    //If no letters typed, stright away = 0
    word_length = 0;
  } else {
    word_length = words.split(" ").length;
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0f2654" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            id="textinput"
            placeholder="Enetr Text Here"
            className="form-control"
            value={text}
            onChange={HandleChangeUp}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#0f2654",
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={HandleClickUp}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={HandleClickLow}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={HandleClickCopy}>
          Copy
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={HandleClickSpeak}>
          Speak
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={HandleClickClear}>
          Clear
        </button>
      </div>

      <div
        className="container mt-3"
        style={{ color: props.mode === "dark" ? "white" : "#0f2654" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {word_length} words and {text.length} characters
        </p>
        <p>{0.08 * word_length} minutes read</p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something to preview it here!"}</p>
      </div>
    </>
  );
}
