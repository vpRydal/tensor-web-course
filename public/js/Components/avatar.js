import Component from "./component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import ModalWindow from "./modalWindow.js";

class Avatar extends Component {
    'use strict';

    constructor(options) {
        super(options);

        this._modalCard = undefined
    }

    render(options) {
        return `
        <div class="avatar avatar__rounded">
            <img src="${options.photoPath}" alt="Аватарка" class="avatar-img">
            <span class="avatar-name">${options.fio}</span>
            <span class="avatar-university">${options.schoolNameAndYear} курс</span>
        </div>
        `
    }

    afterMount() {
        this.subscribeTo(this._container, 'click', this.openCard.bind(this))
    }

    openCard() {
        if (!this._modalCard) {
            const content = `
                <div class="card">
                     <div class="card-info">
                          <h2 class="card-info-name">${this._options.fio}</h2>
                          <div class="card-info-row">
                              <span class="card-info-row-name">Вуз</span>
                              <span class="card-info-row-value">${this._options.schoolNameAndYear} курс</span>
                          </div>
                     <div class="card-info-row">
                         <span class="card-info-row-name">День рождения</span>
                         <span class="card-info-row-value">${this._options.birthDate.getDay()}.${this._options.birthDate.getMonth()}.${this._options.birthDate.getFullYear()} курс</span>
                     </div>
                     </div>
                     <img src="${this._options.photoPath}" alt="Аватарка" class="card-img">
                </div>
            `
            this._modalCard = ComponentFactory.create(ModalWindow, {content})
            this._modalCard.mount(document.body)
        }

        this._modalCard.open();
    }
}

export default Avatar