import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [timings, setTimings] = useState([]);
  const [startTime, setStartTime] = useState();
  const [letters, setLetters] = useState([]);
  const [length, setLength] = useState([]);

  function handleInputChange(event) {
    const currentLetter = event.target.value.slice(-1);
    setLetters((prevLetters) => [...prevLetters, currentLetter]);
    if (!startTime) {
      setStartTime(Date.now());
    } else {
      const currentTime = Date.now();
      const timing = currentTime - startTime;
      setTimings((prevTimings) => [...prevTimings, timing]);
      setStartTime(currentTime);
    }
    setInputValue(event.target.value);
    setLength(event.target.value.length);  
  }

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
         {timings.map((timing, timingIndex) => (
          <div key={timingIndex}>key was {timing}ms behind.(input is {length} long)</div>
        ))}    
    </>
  );
}

export default App;
