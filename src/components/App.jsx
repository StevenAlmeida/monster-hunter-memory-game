import { useState } from 'react';
import MainMenu from './MainMenu';
import Game from './Game';

import mhWorldData from '../../public/data/mhworld-data.json';
import mhRiseData from '../../public/data/mhrise-data.json';

const gameData = {
  mhworld: mhWorldData,
  mhrise: mhRiseData
};

export default function App() {
  const [gameActive, setGameActive] = useState(false);
  const [gameType, setGameType] = useState('mhworld');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState({ mhworld: 0, mhrise: 0 });
  
  function resetScore() {
    setScore(0);
  }
  
  function incrementScore() {
    setScore(score+1);
  }
  
  function updateHighScore(newScore) {
    setHighScore({ ...highScore, [gameType]: newScore });
  }
  
  function selectGameType(typeId) {
    setGameType(typeId);
  }
  
  function toggleGameActive() {
    setGameActive(!gameActive);
  }
  
  if (!gameActive) {
    return (
      <>
        <div className='background' />
        <MainMenu
          gameType={gameType}
          selectGameType={selectGameType}
          toggleGameActive={toggleGameActive}
        />
      </>
    ) 
  }
  
  return (
    <>
      <div className='background' />
      <Game 
        monsters={gameData[gameType]}
        score={score}
        highScore={highScore[gameType]}
        incrementScore={incrementScore}
        resetScore={resetScore}
        updateHighScore={updateHighScore}
        toggleGameActive={toggleGameActive}
      />
    </>
  )
}
