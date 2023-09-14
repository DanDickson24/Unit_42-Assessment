
import React from 'react';

function MadLibStory({ story }) {
  return (
    <div>
      {story ? (
    // If a story exists (i.e., not empty), display the story.
        <div>
          <h2>Mad Lib Story:</h2>
          <p>{story}</p>
        </div>
      ) : (
    // If no story exists, display a message instructing the user to fill in the fields.
        <p>Fill in the fields above for a surpise</p>
      )}
    </div>
  );
}

export default MadLibStory;
