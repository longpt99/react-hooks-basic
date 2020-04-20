import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'

ColorBox.propTypes = {

};

function getRandumColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deepink';
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandumColor();
    setColor(newColor)
    localStorage.setItem('box_color', newColor)
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}>
    </div>
  );
}

export default ColorBox;