import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
          <img class="header__logo" src={logoPath} alt="место" />
        </header>
    );
}

export default Header;