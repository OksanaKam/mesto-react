import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return(
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__title-group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button" aria-label="Нравится"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button className="element__trash" type="button" aria-label="Удалить"></button>
    </li>
  );
}

export default Card;