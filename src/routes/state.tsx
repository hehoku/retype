import { useEffect, useState } from "react";

const StateType = (): JSX.Element => {
  const [date, setDate] = useState<Date>(new Date());

  const refreshClock = (): void => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default StateType;
