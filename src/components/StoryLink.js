import React from 'react';

const StoryLink = ({ link }) => {
  return (
    <div className="story-details-link">
      <a href={link} target="_blank">{link}</a>
    </div>
  );
}

export default StoryLink;