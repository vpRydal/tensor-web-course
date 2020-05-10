/**
 * @module Student
 * @export Student
 */

import Person from "./person.js";
import HTMLManipulator from "./htmlManipulator.js";

/**
 * @class Student
 * @extends Person
 *
 * @property {Fio} fio
 * @property {string} photoPath
 * @property {string} universityName
 * @property {number} universityYear
 *
 * @method renderAvatar
 * @method appendAvatarTo
 */
class Student extends Person {
    /**
     * @constructor
     * @param {Fio} fio
     * @param {string} photoPath
     * @param {string} universityName
     * @param {number} universityYear
     * @param {Date} birthDate
     */
    constructor(fio, photoPath, universityName, universityYear, birthDate) {
        super(fio, photoPath, birthDate)

        this._universityName = universityName
        this._universityYear = universityYear
    }

    /**
     * рендерит аватарку студента
     * @method
     * @return {HTMLDivElement}
     */
    renderAvatar() {
        const avatar = HTMLManipulator.createElement('div', ['avatar', 'avatar__rounded'])
        const img = HTMLManipulator.createElement('img', 'avatar-img', )

        img.setAttribute('src', this.photoPath)

        const spanName = HTMLManipulator.createElement('span', 'avatar-name', this.fio.full)
        const spanUniversity = HTMLManipulator.createElement('span', 'avatar-university', `${this.universityName} ${this.universityYear} курс`)

        avatar.appendChild(img)
        avatar.appendChild(spanName)
        avatar.appendChild(spanUniversity)

        return avatar
    }

    /**
     * рендерит картачку студента
     * @method
     * @return {HTMLDivElement}
     */
    renderCard() {
        const card = HTMLManipulator.createElement('div', 'card')
        const info = HTMLManipulator.createElement('div', 'card-info')
        const name = HTMLManipulator.createElement('h2', 'card-info-name', this.fio.full)
        const universityDiv = HTMLManipulator.createElement('div', 'card-info-row')
        const universityName = HTMLManipulator.createElement('span', 'card-info-row-name', 'Вуз')
        const universityValue = HTMLManipulator.createElement('span', 'card-info-row-value', `${this.universityName} ${this.universityYear} курс`)

        universityDiv.appendChild(universityName)
        universityDiv.appendChild(universityValue)

        const birthDateDiv = HTMLManipulator.createElement('div', 'card-info-row')
        const birthDateName = HTMLManipulator.createElement('span', 'card-info-row-name', 'День рождения')
        const birthDateValue = HTMLManipulator.createElement('span', 'card-info-row-value', `${this.birthDate.getDay()}.${this.birthDate.getMonth()}.${this.birthDate.getFullYear()}`)

        birthDateDiv.appendChild(birthDateName)
        birthDateDiv.appendChild(birthDateValue)

        info.appendChild(name)
        info.appendChild(birthDateDiv)
        info.appendChild(universityDiv)

        const photo = HTMLManipulator.createElement('img', 'card-img', 'День рождения')
        photo.setAttribute('src', this.photoPath)

        photo.classList.add('card-img')

        card.appendChild(info)
        card.appendChild(photo)

        return card
    }

    /* getters */
    /**
     * @return string
     */
    get universityName() {
        return this._universityName
    }

    /**
     * @return number
     */
    get universityYear() {
        return this._universityYear
    }

    /**
     * @return string
     */
    get universityNameAndYear() {
        return `${this._universityName} ${this._universityYear}`
    }
}

export default Student