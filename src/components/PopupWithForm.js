import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__modal">
                <button className="popup__close" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
                <form className="popup__container popup__form" name={props.name} method="post">
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__button popup__button_disabled" type="submit" aria-label="Сохранить" disabled>{props.button}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
