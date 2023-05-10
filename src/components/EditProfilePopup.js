import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm title="Редактировать профиль" 
                       name="type_profile" 
                       button="Сохранить" 
                       isOpen={isOpen} 
                       onClose={onClose}
                       onSubmit={handleSubmit}>
            <input className="popup__input popup__input_name_title" 
                   id="title-input" type="text" 
                   name="name" 
                   value={name || ''}
                   onChange={handleChangeName} 
                   placeholder="name" 
                   minlength="2" maxlength="40" required />
            <span className="popup__input-error title-input-error"></span>
            <input className="popup__input popup__input_name_yourself" 
                   id="yourself-input" type="text" 
                   name="about" 
                   value={description || ''}
                   onChange={handleChangeDescription} 
                   placeholder="yourself" 
                   minlength="2" maxlength="200" required />
            <span className="popup__input-error yourself-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;