import { useState, useEffect } from "react";
import "../index.css";

export default function Stopwatch() {
  const [jam, setJam] = useState(0);
  const [menit, setMenit] = useState(0);
  const [detik, setDetik] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setDetik((prevDetik) => {
          if (prevDetik === 59) {
            setMenit((prevMenit) => {
              if (prevMenit === 59) {
                setJam((prevJam) => prevJam + 1);
                return 0;
              }
              return prevMenit + 1;
            });
            return 0;
          }
          return prevDetik + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  function reset() {
    setJam(0);
    setMenit(0);
    setDetik(0);
    setRunning(false);
  }

  function start() {
    setRunning(true);
  }

  function stop() {
    setRunning(false);
  }

  return (
    <div className="container">
      <h1 className="judul">Stopwatch by Rull 😀</h1>
      <div className="stopwatch">
        <h3>
          {jam} : {menit} : {detik}
        </h3>
        <h1>jam : menit : detik</h1>
      </div>
      <div className="buttons">
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <button className="start" onClick={start}>
          Start
        </button>
        <button className="stop" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
}
