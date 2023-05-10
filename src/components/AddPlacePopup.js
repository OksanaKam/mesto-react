import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const nameRef = useRef();
    const linkRef = useRef();

    useEffect(() => {
        nameRef.current.value = '';
        linkRef.current.value = '';
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        });
    }

    return(
        <PopupWithForm title="Новое место" 
                       name="type_card-add" 
                       button="Создать" 
                       isOpen={isOpen} 
                       onClose={onClose}
                       onSubmit={handleSubmit}>
          <input className="popup__input popup__input_name_place" 
                 id="place-input" type="text" 
                 name="name" 
                 ref={nameRef}
                 placeholder="Название" 
                 minlength="2" maxlength="30" required />
          <span className="popup__input-error place-input-error"></span>
          <input className="popup__input popup__input_name_reference" 
                 id="reference-input" type="url" 
                 name="link" 
                 ref={linkRef}
                 placeholder="Ссылка на картинку" required />
          <span className="popup__input-error reference-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;