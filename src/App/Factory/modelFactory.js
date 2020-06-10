/**
 * @module ModelFactory
 * @export ModelFactory
 */

import Factory from "../../Core/factory.js";

/**
 * @class ModelFactory
 * @extends Factory
 *
 * @method create
 */
class ModelFactory extends Factory{

    create(model, args) {
        return new model(args)

    }
}

export default ModelFactory