// import React from 'react';

// function MadLibForm({
//   generateStory,
//   noun,
//   setNoun,
//   noun2,
//   setNoun2,
//   adjective,
//   setAdjective,
//   color,
//   setColor,
// }) {

// const allFieldsFilled = noun && noun2 && adjective && color;

// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (allFieldsFilled) {
//       generateStory(noun, noun2, adjective, color);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <input
//           type="text"
//           value={noun}
//           onChange={(e) => setNoun(e.target.value)}
//           placeholder="Noun"
//         />
//       </label>
//       <label>
//         <input
//           type="text"
//           value={noun2}
//           onChange={(e) => setNoun2(e.target.value)}
//           placeholder="Noun 2"
//         />
//       </label>
//       <label>
//         <input
//           type="text"
//           value={adjective}
//           onChange={(e) => setAdjective(e.target.value)}
//           placeholder="Adjective"
//         />
//       </label>
//       <label>
//         <input
//           type="text"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//           placeholder="Color"
//         />
//       </label>
//       <button type="submit" disabled={!allFieldsFilled}>
//         Get Story
//       </button>
//     </form>
//   );
// }

// export default MadLibForm;


import React from 'react';

function MadLibForm({ userInputs, setUserInputs, stories }) {
  const { noun, noun2, adjective, color } = userInputs;

  const allFieldsFilled = noun && noun2 && adjective && color;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allFieldsFilled) {
      generateStory();
    }
  };

  const handleInputChange = (e, field) => {
    setUserInputs({ ...userInputs, [field]: e.target.value });
  };

  const generateStory = () => {
    // Generate the story based on user inputs and the selected story template
    const { noun, noun2, adjective, color, selectedStory } = userInputs;
    if (selectedStory) {
      const storyTemplate = selectedStory.template;

      // Replace placeholders in the story template with user input values
      const story = storyTemplate
        .replace('[adjective]', adjective)
        .replace('[noun]', noun)
        .replace('[noun2]', noun2)
        .replace('[color]', color);

      setUserInputs({ ...userInputs, story: { text: story } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={noun}
          onChange={(e) => handleInputChange(e, 'noun')}
          placeholder="Noun"
        />
      </label>
      <label>
        <input
          type="text"
          value={noun2}
          onChange={(e) => handleInputChange(e, 'noun2')}
          placeholder="Noun 2"
        />
      </label>
      <label>
        <input
          type="text"
          value={adjective}
          onChange={(e) => handleInputChange(e, 'adjective')}
          placeholder="Adjective"
        />
      </label>
      <label>
        <input
          type="text"
          value={color}
          onChange={(e) => handleInputChange(e, 'color')}
          placeholder="Color"
        />
      </label>
      <button type="submit" disabled={!allFieldsFilled}>
        Get Story
      </button>
    </form>
  );
}

export default MadLibForm;
