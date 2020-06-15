# State Exercise

## About

Non-interactive components aren't particularly useful. We need our websites to respond to user interaction.

In React, there is **only one** way you should make changes to the DOM. You update the component's state. This will make React recompute what the DOM should look like and update the changed DOM nodes.

In `SampleComponent.js`, you'll find a sample component with React state that you may may use as a reference for this exercise.

## Instructions

1. Run the app: `npm start`. Play with it in the browser and read the source code of the sample component in `SampleComponent.js`.
2. Write a counter component in `Counter.js` by using the provided sample component as a reference. The component should render some text saying "The button was pressed x times." and it should also render a button with the text "Increment". Pressing on the button should increment x by 1.
3. Run the tests: `npm test`.
4. Modify `index.js` to use your counter component and run the app (`npm start`) to make sure it works in the browser.

## Hint

Here's more info on the useState hook in the [react docs](https://reactjs.org/docs/hooks-state.html).

## Questions

Most modern UI frameworks, including React, have the concept of a virtual DOM. What is it? Explain in no more than two sentences.
