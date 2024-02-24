import React, { useState } from "react";
import "../prompts/gpt-response.css"; // Assuming you have some CSS for styling

function GptResponse() {
  const [promptText, setPromptText] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const handleButtonClick = () => {
    // Simulating ChatGPT response delay with setTimeout
    setTimeout(() => {
      setShowResponse(true);
    }, 1000); // Adjust delay as needed

    // This is where you would typically send the prompt text to a backend for processing
    // For now, I'm just setting it directly
    setPromptText("This is the response from ChatGPT."); // Replace this with your actual response
  };

  return (
    <div className="Gpt">
      <button onClick={handleButtonClick}>Press me</button>
      {showResponse && (
        <div className="chat-response">
          <div className="chat-bubble">
            <p>{promptText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GptResponse;
