export default function GameOver({ win, score, highScore, replay, goToMenu }) {
  return (
    <div className='game-over'>
      <div className='wrapper'>
        <h1>{win ? 'You Win!' : 'You Lose!'}</h1>
        <p>{score > highScore ? `You got a new high score of ${score}` : `You got a score of ${score}`}</p>
        <ul>
          <li><button className='btn' onClick={replay}>REPLAY</button></li>
          <li><button className='btn' onClick={goToMenu}>MENU</button></li>
        </ul>
      </div>
    </div>
  );
}