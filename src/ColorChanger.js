import React, { useState } from 'react';

const ColorChanger = ({ setTextColor }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleClick = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
    setTextColor(randomColor);
  }

  return (
    <div style={{ backgroundColor }}>
        <button onClick={handleClick}>Free your Color</button>
    </div>
  );
}

export default ColorChanger;
