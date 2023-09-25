import { useEffect } from "react";

function Timer({ time, onSetTimer }) {
  useEffect(() => {
    const timer = setInterval(() => {
      onSetTimer({ type: "timeout", payload: time - 1 });
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, onSetTimer]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <div className="timer">{formatTime(time)}</div>;
}

export default Timer;
