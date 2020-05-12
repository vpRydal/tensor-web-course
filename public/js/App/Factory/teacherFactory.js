/**
 * @module TeacherFactory
 * @export TeacherFactory
 */

import Factory from "../../Core/factory.js";
import Teacher from "../../School/Persone/teacher.js";
import App from "../Facades/app.js";

/**
 * @class TeacherFactory
 *
 * @method create
 */
class TeacherFactory extends Factory {
    /**
     * @override
     * @param {array} args
     * @return {Teacher}
     */
    create(args) {
        const fio = App.get('FioFactory').create(args)

        return new Teacher(fio, args.photoPath, new Date())
    }
}

export default TeacherFactory