export default function ScoreDisplay({ score, highScore }) {
  return (
    <div className='score-display'>
      <h2>{`Score: ${score}`}</h2>
      <h2>{`High Score: ${highScore}`}</h2>
    </div>
  );
}