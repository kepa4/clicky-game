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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pictures: shuffle(pictures),
      score: 0,
      lastPicked: null,
      message: 'Click an Image!',
    };
  }

  componentWillMount() {
    this.setState({pictures: shuffle(pictures)});
  }

  handleClick = picture => {
    if (this.state.lastPicked !== picture) {
      this.setState({score: this.state.score + 5});
      this.setState({message: 'Click an image!'});
    } else {
      this.setState({score: 0});
      this.setState({lastPicked: null});
      this.setState({
        message:
          'You already clicked that one! Game over! Click an image to play again',
      });
    }
    this.setState({lastPicked: picture});
    this.setState({pictures: shuffle(pictures)});
  };

  render() {
    return (
      <div>
        <h3>Score: {this.state.score} </h3>
        <h3> {this.state.message} </h3>
        <div className="wrapper">
          {this.state.pictures.map((picture, index) => {
            return (
              <div
                onClick={() => {
                  this.handleClick(picture);
                }}
                key={index}>
                <GameCard image={picture} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Game;
