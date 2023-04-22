import React from 'react';

function ImagePopup(props) {
    return(
        <div className={`popup popup_type_picture ${props.card && 'popup_opened'}`}>
            <div className="popup__modal-img">
                <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
                <form className="popup__container-img popup__form" id="popup__container-img" name="myPhotos" method="post" novalidate>
                   <img className="popup__place-image" 
                        src={props.card ? props.card.link : ''} 
                        alt={props.card ? props.card.name : ''} />
                    <h2 className="popup__place-title">{props.card ? props.card.name : ''}</h2>
                </form>
            </div>
        </div>
    );
}

export default ImagePopup;