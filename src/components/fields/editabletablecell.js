import React, { useState } from "react";

const EditableTableCell = ({ initialValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    setValue(inputValue || value);
  };

  return (
    <td onClick={() => setIsEditing(true)}>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        value
      )}
    </td>
  );
};

export default EditableTableCell;
