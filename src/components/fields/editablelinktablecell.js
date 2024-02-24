import React, { useState } from "react";
import "../fields/editablelinktablecell.css";

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
        className="pms-link"
      />
      {linkContent}
    </td>
  );
};

export default EditableLinkTableCell;
