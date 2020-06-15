import React, { useState } from "react";

export function SampleApp() {
  // useState is called with "😀", which is the initial state
  // it returns a tuple of the:
  // the current state (currentMood)
  // and setCurrentMood, a callback to set component state
  // and rerender the component
  const [currentMood, setCurrentMood] = useState("😀");

  const isHappy = currentMood === "😀";

  // The button text is generated dynamically
  const actionText = isHappy ? "Poke me to annoy me!" : "Give me a hug!";

  // Here we define an event handler that we pass to the button
  const toggleMood = () => {
    isHappy ? setCurrentMood("😖") : setCurrentMood("😀");
  };

  return (
    <>
      I'm currently feeling:
      <h1>{currentMood}</h1>
      {/*
      Here we pass the event handler to the button,
      just like we do it in HTML. Only one difference:
      React likes camelCase for component props. */}
      <button onClick={toggleMood}>{actionText}</button>
    </>
  );
}
