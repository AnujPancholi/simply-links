import React from 'react'

import '../../css/flex.css';
import './LinkBox.css';


const LinkBox = ({
  text,
  url
}) => {
  
  text = text || "NOT FOUND"
  url = url || "#"
  
  return (<div className="link-container flex-p-hor flex-p-center-absolute">
    <a className="link-text" href={url} target="_blank" rel="noopener noreferrer">{text}</a>
  </div>)
}

export default LinkBox;