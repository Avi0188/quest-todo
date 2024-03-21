import React, { useEffect, useRef } from 'react';

const Dropdown = (props) => {
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (dropdownRef && dropdownRef.current.contains(e.target)) {
      return; 
    }
  
    if (props.onClose) props.onClose();
  };

  return (
    <div
      ref={dropdownRef}
      className='dropdown'
      style={{
        position: "absolute",
        top: "100%",
        right: "0",
        backgroundColor: "#fff", 
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", 
        borderRadius: "4px", 
        padding: "8px",
        zIndex: "999", 
      }}
    >
      {props.children}
    </div>
  );
};

export default Dropdown;
