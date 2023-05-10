import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = useRef();

    useEffect(() => {
        avatarRef.current.value = '';
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
    } 

    return(
        <PopupWithForm title="Обновить аватар" 
                       name="type_avatar-edit" 
                       button="Создать" 
                       isOpen={isOpen} 
                       onClose={onClose}
                       onSubmit={handleSubmit}>
          <input className="popup__input popup__input_name_avatar" 
                 id="avatar-input" 
                 type="url" 
                 name="avatar"
                 ref={avatarRef} 
                 placeholder="" required />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;