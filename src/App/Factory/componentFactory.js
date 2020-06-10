/**
 * @module SchoolFactory
 * @export SchoolFactory
 */

import Factory from "../../Core/factory.js";

/**
 * @class ComponentFactory
 * @extends Factory
 *
 * @method create
 */
class ComponentFactory extends Factory{

    create(component, options) {
        return new component(options)

    }
}

export default ComponentFactory