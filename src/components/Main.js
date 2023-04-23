import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([profileUser, cardsArray]) => {
      setUserName(profileUser.name);
      setUserDescription(profileUser.about);
      setUserAvatar(profileUser.avatar);
      setCards(cardsArray);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-group" onClick={onEditAvatar}>
            <img className="profile__avatar" alt="жак ив кусто" src={userAvatar} />
            <button className="profile__avatar-button" type="button" id="avatar-button" aria-label="Изменить"></button>
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" id="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
            <p className="profile__text">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
        </section>
        <section>
          <ul className="elements">
            {cards.map(card => {
              return(
                <Card card={card} key={card._id} onCardClick={onCardClick} />
              );
            })}
          </ul>
        </section>
      </main>
    );

}

export default Main;