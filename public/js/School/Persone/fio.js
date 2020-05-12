/**
 * @module Fio
 * @export Fio
 */

/**
 * @class Fio
 * @property {string} full
 * @property {string} _name
 * @property {string} _middleName
 * @property {string} _secondName
 * @property {boolean} _isEmpty
 * @private _secondName
 * @private _name
 * @private _middleName
 * @private _isEmpty
 *
 */
class Fio {
    /**
     * @constructor
     * @param {string} name
     * @param {string} secondName
     * @param {string} middleName
     */
    constructor(name="", secondName="", middleName="") {
        this._name = name;
        this._secondName = secondName;
        this._middleName = middleName;

        this._isEmpty = false

        if (!name && !secondName && !middleName) {
            console.warn('FIO is empty')
            this._isEmpty = true
        }
    }

    /**
     * @access
     * @returns {string}
     */
    get full() {
        let stringFio = "";

        if (this._name)
            stringFio = `${this._name} `
        if (this._secondName)
            stringFio = stringFio.concat(`${this._secondName} `)
        if (this._middleName)
            stringFio = stringFio.concat(`${this._middleName}`)

        return stringFio
    }

    /**
     * @access
     * @returns {boolean}
     */
    get isEmpty() {
        return this._isEmpty
    }

    /**
     * @access
     * @returns {string}
     */
    get name() {
        return this._name
    }

}

export default Fio