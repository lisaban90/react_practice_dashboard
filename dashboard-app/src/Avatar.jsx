import React from 'react';

const Avatar = ({
  initials = "AB", // Default initials
  size = 50, // Default size in pixels
  backgroundColor = "#3498db", // Default background color
  textColor = "#fff", // Default text color
  shape = "circle" // Default shape
}) => {
  // Inline styles based on props
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor,
    color: textColor,
    fontSize: size / 2.5,
    width: size,
    height: size,
    borderRadius: shape === "circle" ? "50%" : "8px", // Circular or rounded square
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    userSelect: "none"
  };

  return( 
  <div style={styles}>
      {initials}
  </div>
  );
  };

export default Avatar;