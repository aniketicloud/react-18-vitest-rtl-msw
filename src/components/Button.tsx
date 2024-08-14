import { useState } from "react";

const Button = () => {
  const [label, setLabel] = useState("Click me");
  return (
    <button type="button" onClick={() => setLabel("Clicked !!")}>
      {label}
    </button>
  );
};

export default Button;
