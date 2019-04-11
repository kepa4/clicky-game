import React from 'react';

function GameCard(props) {
  const style = {
    card: {
      backgroundImage: 'url(' + props.image + ')',
      height: 300,
      width: 300,
    },
  };
  return <div className={'wrapper'} style={style.card} />;
}

export default GameCard;
