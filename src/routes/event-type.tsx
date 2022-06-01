import { useState } from "react";
import "./event-type.css";

const Toggle = (): JSX.Element => {
  const [isToggleOn, setIsToggleON] = useState<boolean>(true);

  const handleClick = (): void => {
    setIsToggleON(!isToggleOn);
  };

  return (
    <div className={`event ${isToggleOn ? "on" : "off"}`}>
      <button onClick={handleClick}>{isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Toggle;
