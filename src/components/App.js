import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} 
              onAddPlace={handleAddPlaceClick} 
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm title="Редактировать профиль" 
                       name="type_profile" 
                       button="Сохранить" 
                       isOpen={isEditProfilePopupOpen} 
                       onClose={closeAllPopups}>
          <input className="popup__input popup__input_name_title" id="title-input" type="text" name="name" value="" placeholder="name" minlength="2" maxlength="40" required />
          <span className="popup__input-error title-input-error"></span>
          <input className="popup__input popup__input_name_yourself" id="yourself-input" type="text" name="about" value="" placeholder="yourself" minlength="2" maxlength="200" required />
          <span className="popup__input-error yourself-input-error"></span>
        </PopupWithForm>
        <PopupWithForm title="Новое место" 
                       name="type_card-add" 
                       button="Создать" 
                       isOpen={isAddPlacePopupOpen} 
                       onClose={closeAllPopups}>
          <input className="popup__input popup__input_name_place" id="place-input" type="text" name="name" value="" placeholder="Название" minlength="2" maxlength="30" required />
          <span className="popup__input-error place-input-error"></span>
          <input className="popup__input popup__input_name_reference" id="reference-input" type="url" name="link" value="" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error reference-input-error"></span>
        </PopupWithForm>
        <PopupWithForm title="Обновить аватар" 
                       name="type_avatar-edit" 
                       button="Создать" 
                       isOpen={isEditAvatarPopupOpen} 
                       onClose={closeAllPopups}>
          <input className="popup__input popup__input_name_avatar" id="avatar-input" type="url" name="avatar" value="" placeholder="" required />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
