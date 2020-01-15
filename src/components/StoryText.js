import React from 'react';

const StoryText = ({ text }) => {
  const getHTML = () => ({ __html: text });

  return (
    <div className="story-details-text" dangerouslySetInnerHTML={getHTML()} />
  );
}

export default StoryText;