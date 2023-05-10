import React from 'react';

function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_type_picture ${card && 'popup_opened'}`}>
            <div className="popup__modal-img">
                <button className="popup__close" 
                        type="button" aria-label="Закрыть" 
                        onClick={onClose}></button>
                <form className="popup__container-img popup__form" id="popup__container-img" name="myPhotos" method="post" novalidate>
                   <img className="popup__place-image" 
                        src={card?.link} 
                        alt={card?.name} />
                    <h2 className="popup__place-title">{card?.name}</h2>
                </form>
            </div>
        </div>
    );
}

export default ImagePopup;