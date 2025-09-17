import { useState } from "react";
import "./App.css";

export default function ConuntRun() {
  const [runs, setRuns] = useState(0);

  const singleHandler = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const doubleHandler = () => {
    const updatedRuns = runs + 2;
    setRuns(updatedRuns);
  };

  const tripleHandler = () => {
    const updatedRuns = runs + 3;
    setRuns(updatedRuns);
  };
  const fourHandler = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };
  const [six, setSix] = useState(0);
  const sixHandler = () => {
    const updateSix = six + 1;
    setSix(updateSix);
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);
  };

  return (
    <div className="cricket">
      {runs >= 100 ? (
        <p>🎉 Congratulation! You achieved a Century!</p>
      ) : runs >= 50 ? (
        <p>👏 Congratulation! You achieved a Half Century!</p>
      ) : (
        <p>Keep going! You play well.</p>
      )}
      <p>Six:{six}</p>
      <h3>Runs: {runs}</h3>
      <button onClick={singleHandler}>Single</button>
      <button onClick={doubleHandler}>Double</button>
      <button onClick={tripleHandler}>Triple</button>
      <button onClick={fourHandler}>Four</button>
      <button onClick={sixHandler}>Six</button>
    </div>
  );
}
