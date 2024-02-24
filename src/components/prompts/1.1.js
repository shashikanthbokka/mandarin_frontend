import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Predefined sentence template
      const sentenceTemplate = `The user input is: "${inputText}" and the selected option is "${selectedOption}".`;

      // Sending the embedded sentence to the API
      const response = await fetch("YOUR_CHATGPT_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: sentenceTemplate,
        }),
      });

      const responseData = await response.json();
      setResponse(responseData.response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
