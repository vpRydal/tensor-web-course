import Component from "../../Core/component.js";
import * as React from "react";

class Header extends React.Component {
    'use strict';

    render() {
        return (
            <header className="header header__XL">
                <div className="header-title header-title__SM">
                    <img className="header-title-logo header-title-logo__SM" src="/img/logo.png" alt=""/>
                    <span className="header-title-text">Tensor School</span>
                </div>
                <span className="header-divider">
                </span>
                <p className="header-text-about">
                    Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть
                    темы
                    занятий.
                </p>
            </header>
        )
    }
}

export default Header