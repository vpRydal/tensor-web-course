import Component from "../../../Core/component.js";
import ComponentFactory from "../../Factory/componentFactory.js";
import ModalWindow from "../modalWindow.js";
import App from "../../Facades/app.js";
import Avatar from "./avatar.js";

class TeacherAvatar extends Avatar {
    'use strict';

    render(options) {
        const teacher = options.person

        return `
        <div class="avatar avatar__rounded">
            <img src="${teacher.photo_path}" alt="Аватарка" class="avatar-img">
            <span class="avatar-name">${teacher.fio}</span>
            <span class="avatar-university">${teacher.position}</span>
        </div>
        `
    }

    openCard() {
        const teacher = this._options.person
        const birth_date = new Date(teacher.birth_date)

        if (!this._modalCard) {
            const content = `
                <div class="card">
                     <div class="card-info">
                          <h2 class="card-info-name">${teacher.fio}</h2>
                          <div class="card-info-row">
                              <span class="card-info-row-name">Место работы</span>
                              <span class="card-info-row-value">${teacher.universityName}</span>
                          </div>
                              <div class="card-info-row">
                              <span class="card-info-row-name">Должность</span>
                              <span class="card-info-row-value">${teacher.position}</span>
                          </div>
                         <div class="card-info-row">
                             <span class="card-info-row-name">День рождения</span>
                             <span class="card-info-row-value">${birth_date.getDay()}.${birth_date.getMonth()}.${birth_date.getFullYear()}</span>
                         </div>
                     </div>
                     <img src="${teacher.photo_path}" alt="Аватарка" class="card-img">
                </div>
            `
            this._modalCard = App.get('ComponentFactory').create(ModalWindow, {content, title: 'Карточка преподавателя'})
            this._modalCard.mount(document.body).then(() => {
                this._modalCard.open();
            })

            return
        }

        this._modalCard.open();
    }
}

export default TeacherAvatar