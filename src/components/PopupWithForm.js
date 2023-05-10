import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, button, children, onSubmit}) {
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__modal">
                <button className="popup__close" type="button" onClick={onClose} aria-label="Закрыть"></button>
                <form className="popup__container popup__form" 
                      name={name} 
                      onSubmit={onSubmit}  
                      method="post"
                      noValidate>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__button popup__button_disabled" 
                            type="submit" aria-label="Сохранить">{button}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
