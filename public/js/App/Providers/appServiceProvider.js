/**
 * @module AppServiceProvider
 * @export AppServiceProvider
 */

import StudentFactory from "../Factory/studentFactory.js";
import Provider from "../../Core/provider.js";
import TeacherFactory from "../Factory/teacherFactory.js";
import FioFactory from "../Factory/fioFactory.js";
import SchoolFactory from "../Factory/schoolFactory.js";

/**
 * @class HTMLManipulator
 * @extends Provider
 *
 * @method createElement
 */
class AppServiceProvider extends Provider{

    register() {
        this.serviceContainer.singleton('StudentFactory', () => {
            return new StudentFactory()
        })
        this.serviceContainer.singleton('TeacherFactory', () => {
            return new TeacherFactory()
        })
        this.serviceContainer.singleton('FioFactory', () => {
            return new FioFactory()
        })
        this.serviceContainer.singleton('SchoolFactory', () => {
            return new SchoolFactory()
        })
    }
}

export default AppServiceProvider