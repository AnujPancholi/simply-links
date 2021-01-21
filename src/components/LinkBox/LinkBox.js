import React from 'react';

import '../../css/flex.css';
import './LinkBox.css';

const LinkBox = ({ text, url }) => {
  text = text || 'NOT FOUND';
  url = url || '#';

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="link-container link-text flex-p-hor flex-p-center-absolute">
        {text}
      </div>
    </a>
  );
};

export default LinkBox;
