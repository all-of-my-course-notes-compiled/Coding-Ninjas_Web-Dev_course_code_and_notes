import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <ChildComponent color={color} />
    </>
  );
};

export default ParentComponent;
