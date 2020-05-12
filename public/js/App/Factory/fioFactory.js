/**
 * @module StudentFactory
 * @export StudentFactory
 */


import Fio from "../../School/Persone/fio.js";
import Factory from "../../Core/factory.js";

/**
 * @class StudentFactory
 *
 * @method create
 */
class FioFactory extends Factory {

    /**
     * @param {array} args
     * @override
     * @return {Fio}
     */
    create(args) {
        const fio = new Fio(args.name, args.secondName, args.middleName)

        return fio
    }
}

export default FioFactory