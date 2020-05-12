/**
 * @module Student
 * @export Student
 */

import Person from "./person.js";

/**
 * @class Student
 * @extends Person
 *
 * @property {Fio} fio
 * @property {string} photoPath
 * @property {string} school
 * @property {number} schoolYear
 *
 * @method renderAvatar
 */
class Student extends Person {
    /**
     * @constructor
     * @param {Fio} fio
     * @param {string} photoPath
     * @param {School} school
     * @param {number} _schoolYear
     * @param {Date} birthDate
     */
    constructor(fio, photoPath, school, _schoolYear, birthDate) {
        super(fio, photoPath, school, birthDate)

        this._schoolYear = _schoolYear
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
            <span class="avatar-university">${this.schoolNameAndYear} курс</span>
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
                        <span class="card-info-row-value">${this.schoolNameAndYear} курс</span>
                    </div>
                    <div class="card-info-row">
                        <span class="card-info-row-name">День рождения</span>
                        <span class="card-info-row-value">${this._birthDate.getDay()}.${this._birthDate.getMonth()}.${this._birthDate.getFullYear()} курс</span>
                    </div>
                </div>
                <img src="${this.photoPath}" alt="Аватарка" class="card-img">
            </div>`

        return card
    }

    /* getters */
    /**
     * @return number
     */
    get schoolYear() {
        return this._schoolYear
    }

    /**
     * @return string
     */
    get schoolNameAndYear() {
        return `${this._school.name} ${this._schoolYear}`
    }
}

export default Student