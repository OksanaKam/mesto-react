import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <li className="element">
      <img className="element__image" src={props.link} alt={props.name} onClick={handleClick} />
      <div className="element__title-group">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button" aria-label="Нравится"></button>
          <p className="element__like-count">{props.likes.length}</p>
        </div>
      </div>
      <button className="element__trash" type="button" aria-label="Удалить"></button>
    </li>
  );
}

export default Card;