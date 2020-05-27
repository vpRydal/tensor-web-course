import Component from "./component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import ModalWindow from "./modalWindow.js";

class Avatar extends Component {
    'use strict';

    constructor(options) {
        super(options);

        this._modalCard = undefined
    }

    render({student}) {
        return `
        <div class="avatar avatar__rounded">
            <img src="${student.photo_path}" alt="Аватарка" class="avatar-img">
            <span class="avatar-name">${student.fio}</span>
            <span class="avatar-university">${student.study} курс</span>
        </div>
        `
    }

    afterMount() {
        this.subscribeTo(this._container, 'click', this.openCard.bind(this))
    }

    openCard() {
        const student = this._options.student
        const birth_date = new Date(this._options.student.birth_date)

        if (!this._modalCard) {
            const content = `
                <div class="card">
                     <div class="card-info">
                          <h2 class="card-info-name">${student.fio}</h2>
                          <div class="card-info-row">
                              <span class="card-info-row-name">Вуз</span>
                              <span class="card-info-row-value">${student.study} курс</span>
                          </div>
                     <div class="card-info-row">
                         <span class="card-info-row-name">День рождения</span>
                         <span class="card-info-row-value">${birth_date.getDay()}.${birth_date.getMonth()}.${birth_date.getFullYear()}</span>
                     </div>
                     </div>
                     <img src="${student.photo_path}" alt="Аватарка" class="card-img">
                </div>
            `
            this._modalCard = ComponentFactory.create(ModalWindow, {content})
            this._modalCard.mount(document.body)
        }

        this._modalCard.open();
    }
}

export default Avatar