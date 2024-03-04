import './App.css';
import React, { useState } from 'react';

export default function App() {

  const [isPetting, setIsPetting] = useState(false)
  const [isFeeding, setIsFeeding] = useState(false)
  const [mood, setMood] = useState(30)
  const [hunger, setHunger] = useState(30)

  function handlePetting() {
      setIsPetting(true)
      setTimeout(() => {
        setIsPetting(false);
      }, 1000)
    if (hunger > 35) {
      setMood(prevMood => prevMood < 100 ? prevMood + 5 : prevMood + 0)
    }
  }

  function handleFeeding() {
    setIsFeeding(true)
    setTimeout(() => {
      setIsFeeding(false);
    }, 1000)
    if (hunger < 100) {
      setHunger(prevHunger => prevHunger + 10)
    }
  }

  return (
    <div className="App">
      <h1>Creature Simulator</h1>
      <h1>👾</h1>
      <button
        onClick={handlePetting}
        disabled={isPetting}>
          {isPetting ? "Petting..." : "Pet Me"}
      </button>
      <button
        onClick={handleFeeding}
        disabled={isFeeding}>
          {isFeeding ? "Feeding..." : "Feed Me"}
      </button>
      <p>Mood: {mood}</p>
      <p>Hunger: {hunger}</p>
      <p>{hunger >= 100 && isFeeding === true ? "I'm too full!" : ''}</p>
    </div>
  );
}
