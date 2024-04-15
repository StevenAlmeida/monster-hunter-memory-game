import Card from './Card.jsx';

const cardListWidth = ['900px', '900px', '1400px', '1400px'];

export default function CardList({ round, monsterSet, handleCardClick }) {
  
  return (
    <div className='card-list' style={{ width: `min(${cardListWidth[round]},100%)` }}>
      {monsterSet.map(monster => <Card key={monster.id} monster={monster} handleCardClick={handleCardClick} />)}
    </div>
  );
}