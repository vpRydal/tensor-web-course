/**
 * @module Factory
 * @export Factory
 */

import Facade from "../../Core/facade.js";

/**
 * @class Factory
 *
 * @method createStudent
 * @method createTeacher
 * @method createPerson
 * @method createFio
 */
class Factory extends Facade {
    /**
     * @method
     * @static
     * @param {{}} args
     * @return {Student}
     */
    static createStudent(args) {
        return this.serviceContainer.get('StudentFactory').create(args);
    }

    /**
     * @method
     * @static
     * @param {array} args
     * @return {Teacher}
     */
    static createTeacher(args) {
        return this.serviceContainer.get('TeacherFactory').create(args);
    }
    /**
     * @method
     * @static
     * @param {array} args
     * @return {Fio}
     */
    static createFio(args) {
        return this.serviceContainer.get('FioFactory').create(args);
    }

    /**
     * @method
     * @static
     * @param {{students: [Student...], teachers: [Teacher]}} args
     * @return {School}
     */
    static createSchool(args={}) {
        return this.serviceContainer.get('SchoolFactory').create(args);
    }
}

export default Factory