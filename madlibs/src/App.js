// import React, { useState } from 'react';
// import './App.css';
// import MadLibForm from './MadLibForm';
// import MadLibStory from './MadLibStory';

// function App() {
//   const [madLibStory, setMadLibStory] = useState('');
//   const [noun, setNoun] = useState('');
//   const [noun2, setNoun2] = useState('');
//   const [adjective, setAdjective] = useState('');
//   const [color, setColor] = useState('');

  
//   /**
//    * Generates a Mad Lib story based on the input field values.
//    */
//   const generateStory = () => {
//     const story = `Once upon a time, there was a ${adjective} ${noun} who loved a ${color} ${noun2}.`;
//     setMadLibStory(story);
//   };

//     /**
//    * Resets the Mad Lib story and clears the input field values.
//    */
//   const resetStory = () => {
//     setMadLibStory('');
//     setNoun('');
//     setNoun2('');
//     setAdjective('');
//     setColor('');
//   };

//   return (
//     <div className="App">
//       <h1>Dan's Moderately Fun Mad Libs Game</h1>
//       <MadLibForm
//         generateStory={generateStory}
//         noun={noun}
//         setNoun={setNoun}
//         noun2={noun2}
//         setNoun2={setNoun2}
//         adjective={adjective}
//         setAdjective={setAdjective}
//         color={color}
//         setColor={setColor}
//       />
//       <MadLibStory story={madLibStory} />
//       {madLibStory && <button onClick={resetStory}>Restart</button>}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import MadLibForm from './MadLibForm';
import MadLibStory from './MadLibStory';
import stories from './stories'; // Import the stories

function App() {
  // State for user inputs and selected story
  const [userInputs, setUserInputs] = useState({
    noun: '',
    noun2: '',
    adjective: '',
    color: '',
    selectedStory: null,
  });

  return (
    <div className="App">
      <h1>Dan's Moderately Fun Mad Libs Game</h1>
      <select
        value={userInputs.selectedStory ? userInputs.selectedStory.id : ''}
        onChange={(e) =>
          setUserInputs({
            ...userInputs,
            selectedStory: stories.find((story) => story.id === parseInt(e.target.value)),
          })
        }
      >
        <option value="">Select a Story</option>
        {stories.map((story) => (
          <option key={story.id} value={story.id}>
            {story.title}
          </option>
        ))}
      </select>
      <MadLibForm
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        stories={stories} // Pass the stories to MadLibForm
      />
      <MadLibStory story={userInputs.story ? userInputs.story.text : ''} />
    </div>
  );
}

export default App;
