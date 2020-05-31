import Component from "../../../Core/component.js";
import ComponentFactory from "../../Factory/componentFactory.js";
import ModalWindow from "../modalWindow.js";
import App from "../../Facades/app.js";
import Avatar from "./avatar.js";

class StudentAvatar extends Avatar {
    'use strict';


    render(options) {
        const student = options.person

        return `
        <div class="avatar avatar__rounded">
            <img src="${student.photo_path}" alt="Аватарка" class="avatar-img">
            <span class="avatar-name">${student.fio}</span>
            <span class="avatar-university">${student.study_year} Курс</span>
        </div>
        `
    }

    openCard() {
        const student = this._options.person
        const birth_date = new Date(student.birth_date)

        if (!this._modalCard) {
            const content = `
                <div class="card">
                     <div class="card-info">
                          <h2 class="card-info-name">${student.fio}</h2>
                          <div class="card-info-row">
                              <span class="card-info-row-name">Вуз</span>
                              <span class="card-info-row-value">${student.study} ${student.study_year} Курс</span>
                          </div>
                     <div class="card-info-row">
                         <span class="card-info-row-name">День рождения</span>
                         <span class="card-info-row-value">${birth_date.getDay()}.${birth_date.getMonth()}.${birth_date.getFullYear()}</span>
                     </div>
                     </div>
                     <img src="${student.photo_path}" alt="Аватарка" class="card-img">
                </div>
            `
            this._modalCard = App.get('ComponentFactory').create(ModalWindow, {content, title: 'Карточка студента'})
            this._modalCard.mount(document.body).then(() => {
                this._modalCard.open();
            })

            return
        }

        this._modalCard.open();
    }
}

export default StudentAvatar