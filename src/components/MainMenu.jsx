import Card from "./Card";

export default function MainMenu({ gameType, selectGameType, toggleGameActive }) {
  return (
    <div className='main-menu'>
      <div className='img-wrapper'>
        <img className='logo' src='imgs/mhlogo.png' alt='Monster Hunter Memory Game'/>
      </div>
      <div className='game-options'>
        <ul>
          <li><button className={'option' + (gameType === 'mhworld' ? ' selected' : '')} onClick={() => selectGameType('mhworld')}>ICEBORNE</button></li>
          <li><button className={'option' + (gameType === 'mhrise' ? ' selected' : '')} onClick={() => selectGameType('mhrise')}>SUNBREAK</button></li>
        </ul>
        <button className='btn' onClick={toggleGameActive}>PLAY</button>
      </div>
    </div>
  );
}