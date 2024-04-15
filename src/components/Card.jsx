// import test from '../../public/imgs/'

export default function Card({ monster, handleCardClick }) {
  return (
    <div className='card'>
      <button onClick={() => handleCardClick(monster.id)}>
        <div className='img-wrapper'>
          <img src={`/imgs/${monster.img}`} alt='' />
        </div>
        <div className='text-wrapper'>
          <h2>{monster.name}</h2>
        </div>
      </button>
    </div>
  );
}