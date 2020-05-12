/**
 * @module SchoolFactory
 * @export SchoolFactory
 */

import Factory from "../../Core/factory.js";
import School from "../../School/school.js";

/**
 * @class SchoolFactory
 * @extends Factory
 *
 * @method create
 */
class SchoolFactory extends Factory{

    /**
     * @override
     * @param {{students: [Student], teachers: [Teacher]}} args
     * @return {School}
     */
    create(args={}) {
        return new School(args)

    }
}

export default SchoolFactory