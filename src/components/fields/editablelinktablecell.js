import React, { useState } from "react";

const EditableLinkTableCell = () => {
  const [inputValue, setInputValue] = useState("");
  const [linkContent, setLinkContent] = useState("Link");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const convertToLink = () => {
    setLinkContent(
      <a href={inputValue} target="_blank" rel="noopener noreferrer">
        {/* {inputValue} */}
        Link
      </a>
    );
  };

  return (
    <td>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={convertToLink}
      />
      {linkContent}
    </td>
  );
};

export default EditableLinkTableCell;
