import { useState, useEffect } from "react";

function Timer() {
  const [day, setDay] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(
      () => setDay(new Date().toLocaleString()),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [day]);
  return (
    <div>
      <div className="text-violet-400 font-bold text-xl">Time: {day}</div>
    </div>
  );
}

export default Timer;
