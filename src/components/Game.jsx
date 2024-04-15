import { useState } from 'react';
import { useEffect } from 'react';
import ScoreDisplay from './ScoreDisplay';
import CardList from './CardList';
import GameOver from './GameOver';

const roundCardCount = [4, 8, 12, 18];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Game({ monsters, score, highScore, incrementScore, resetScore, updateHighScore, toggleGameActive }) {
  const [gameOver, setGameOver] = useState(false);
  const [round, setRound] = useState(0);
  const [availableMonsters, setAvailableMonsters] = useState(monsters);
  const [monsterSet, setMonsterSet] = useState([]);
  const [selectedMonsters, setSelectedMonsters] = useState(new Set());
  
  useEffect(() => {
    generateNewMonsterSet();
  }, [round]);
  
  function generateNewMonsterSet() {
    const cardCount = roundCardCount[round];
    const monstersCopy = availableMonsters.slice();
    const newMonsterSet = [];
    
    for (let i = 0; i < cardCount; i++) {
      const index = getRandomInt(monstersCopy.length);
      newMonsterSet.push(monstersCopy[index]);
      monstersCopy.splice(index, 1);
    }
    
    setAvailableMonsters(monstersCopy);
    setMonsterSet(newMonsterSet);
  }
  
  function shuffleMonsters() {
    const monsterSetCopy = monsterSet.slice();
    
    monsterSetCopy.forEach((monster, index) => {
      let newIndex = getRandomInt(monsterSetCopy.length);
      while (newIndex === index) newIndex = getRandomInt(monsterSetCopy.length);
      
      monsterSetCopy[index] = monsterSetCopy[newIndex];
      monsterSetCopy[newIndex] = monster;
    });
    
    setMonsterSet(monsterSetCopy);
  }
  
  function endGame() {
    setGameOver(true);
  }
  
  function replay() {
    if (score > highScore) {
      updateHighScore(score);
    }
    setGameOver(false);
    setSelectedMonsters(new Set());
    resetScore();
    if (round === 0) {
      generateNewMonsterSet();
    } else {
      setRound(0);
    }
  }
  
  function goToMenu() {
    if (score > highScore) {
      updateHighScore(score);
    }
    resetScore();
    toggleGameActive();
  }
  
  function handleCardClick(monsterId) {
    if (gameOver) return;
    if (selectedMonsters.has(monsterId)) {
      endGame();
      return;
    }
    
    const selectedMonstersCopy = new Set(selectedMonsters);
    selectedMonstersCopy.add(monsterId);
    setSelectedMonsters(s => selectedMonstersCopy);
    incrementScore();
    
    if (selectedMonstersCopy.size === monsterSet.length) {
      const newRound = round + 1;
      if (newRound === roundCardCount.length) {
        endGame();
        return;
      }
      
      setRound(r => newRound);
      setSelectedMonsters(new Set());
      return;
    }
    
    shuffleMonsters();
  }
  
  return (
    <div className='game'>
      {gameOver && <GameOver win={selectedMonsters.size === roundCardCount[round]} score={score} highScore={highScore} replay={replay} goToMenu={goToMenu} />}
      <ScoreDisplay score={score} highScore={highScore} />
      <CardList round={round} monsterSet={monsterSet} handleCardClick={handleCardClick} />
    </div>
  );
}