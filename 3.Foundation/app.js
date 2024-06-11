import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 id="heading" style={{ color: "blue" }}>
    Namaste react using JSX
  </h1>
);

//React components
const Title = () => (
  <h1 className="head" tabIndex={5}>
    Namaste React using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {/* components composition is adding other components in another */}
    {100 + 111}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React in functional components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
