/**
 * @module Student
 * @export Student
 */

import Person from "./person.js";

/**
 * @class Teacher
 * @extends Person
 *
 * @property {Fio} fio
 * @property {string} photoPath
 *
 * @method renderAvatar
 */
class Teacher extends Person {
    /**
     * @constructor
     * @param {Fio} fio
     * @param {string} photoPath
     * @param {Date} birthDate
     */
    constructor(fio, photoPath, birthDate) {
        super(fio, photoPath, birthDate)
    }

    /**
     * рендерит HTML аватарку студента
     * @method
     * @return {HTMLElement}
     */
    renderHTMLAvatar() {
        const avatar = document.createElement('div')
        avatar.classList.add('avatar', 'avatar__rounded')

        const body = `
            <img src="${this.photoPath}" alt="Аватарка" class="avatar-img">
            <span class="avatar-name">${this.fio.full}</span>
            <span class="avatar-university">${this.universityName} ${this.universityYear} курс</span>
        `
        avatar.innerHTML = body

        return avatar
    }

    /**
     * рендерит картачку студента
     * @method
     * @return {string}
     */
    renderCard() {
        const card =
            `<div class="card">
                <div class="card-info">
                    <h2 class="card-info-name">${this.fio.full}</h2>
                    <div class="card-info-row">
                        <span class="card-info-row-name">Вуз</span>
                        <span class="card-info-row-value">${this.universityName} ${this.universityYear} курс</span>
                    </div>
                    <div class="card-info-row">
                        <span class="card-info-row-name">День рождения</span>
                        <span class="card-info-row-value">${this.birthDate.getDay()}.${this.birthDate.getMonth()}.${this.birthDate.getFullYear()} курс</span>
                    </div>
                </div>
                <img src="${this.photoPath}" alt="Аватарка" class="card-img">
            </div>`

        return card
    }
}

export default Teacher