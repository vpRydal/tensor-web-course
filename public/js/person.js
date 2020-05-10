/**
 * @module Person
 * @export Person
 */

/**
 * @class Person
 *
 * @property {Fio} fio
 * @property {Fio} _fio
 * @property {string} _photoPath
 *
 * @private _fio
 * @private _photoPath
 *
 * @method appendHTMLObjectTo
 */
class Person {
    /**
     * @constructor
     * @param {Fio} fio
     * @param {string} photoPath
     * @param {Date} birthDate
     */
    constructor(fio, photoPath, birthDate) {
        this._fio = fio
        this._photoPath = photoPath
        this._birthDate = birthDate
    }

    /**
     * @return Fio
     */
    get fio () {
        return this._fio
    }
    /**
     * @return Date
     */
    get birthDate () {
        return this._birthDate
    }
    /**
     * @return string
     */
    get photoPath () {
        return this._photoPath
    }
}

export default Person