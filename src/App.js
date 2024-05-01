import { useEffect, useState } from "react";

const format = (timer) => {
  const mins = Math.floor(timer / 60);
  timer %= 60;
  return `${mins}:${timer < 10 ? "0" : ""}${timer}`;
};
export default function App() {
  const [activate, setActivate] = useState(false);
  const [timer, setTimer] = useState(0);
  const toggle = () => {
    setActivate((prevActivate) => !prevActivate);
  };

  useEffect(() => {
    let intervalId;
    if (activate) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [activate]);

  const reset = () => {
    setTimer(0);
    setActivate(false);
  };

  return (
    <div className="App">
      <p>{format(timer)}</p>
      <button onClick={toggle}>{activate ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
