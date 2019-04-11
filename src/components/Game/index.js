import React from 'react';
import GameCard from '../GameCard';
import pictures from '../../assets/pictures';

class Game extends React.Component {
  handlePictures = () => {};
  render() {
    return (
      <div>
        {pictures.map(picture => {
          return <GameCard image={picture} key={picture} />;
        })}
      </div>
    );
  }
}

export default Game;
