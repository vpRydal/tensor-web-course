/**
 * @module StudentFactory
 * @export StudentFactory
 */

import Student from "../../School/Persone/student.js";
import Factory from "../../Core/factory.js";
import App from "../Facades/app.js";

/**
 * @class StudentFactory
 * @extends Factory
 *
 * @method create
 */
class StudentFactory extends Factory{

    /**
     * @override
     * @param {array} args
     * @return {Student}
     */
    create(args) {
        const fio = App.get('FioFactory').create(args)

        return new Student(fio, args.photoPath, args.universityName, args.universityYear, new Date())
    }
}

export default StudentFactory