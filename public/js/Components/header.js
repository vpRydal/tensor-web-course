import Component from "./component.js";

class Header extends Component {
    'use strict';

    constructor(options) {
        super(options);
    }

    render(options) {
        return `
        <header class="header header__XL">
            <div class="header-title header-title__SM">
                <img class="header-title-logo header-title-logo__SM" src="img/logo.png" alt=""/>
                <span class="header-title-text">Tensor School</span>
            </div>
            <span class="header-divider"></span>
            <p class="header-text-about">
                Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть темы
                занятий.
            </p>
        </header>
        `
    }
}

export default Header