import React from "react";

const ProgressBar = ({ percentage, label }) => {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#2d3250",
    borderRadius: 20,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
    marginTop: 10, // Adjusted margin to reduce vertical spacing
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: "#fecda6",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    fontSize: 12,
    color: "#2d3250",
    fontWeight: "bold",
  };

  return (
    <div>
      <p>{label}</p>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
