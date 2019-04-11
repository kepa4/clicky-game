import React from 'react';
import GameCard from '../GameCard';
import pictures from '../../assets/pictures';
import './index.css';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Game extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pictures: shuffle(pictures),
    };
  }

  componentWillMount() {
    this.setState({pictures: shuffle(pictures)});
  }

  handleClick = () => {
    this.setState({pictures: shuffle(pictures)});
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.pictures.map((picture, index) => {
          return (
            <div
              onClick={() => {
                this.handleClick();
              }}
              key={index}>
              <GameCard image={picture} key={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Game;
