/**
 * @module AppServiceProvider
 * @export AppServiceProvider
 */

import Provider from "../../Core/provider.js";
import ModelFactory from "../Factory/modelFactory.js";
import ComponentFactory from "../Factory/componentFactory.js";

/**
 * @class HTMLManipulator
 * @extends Provider
 *
 * @method createElement
 */
class AppServiceProvider extends Provider{

    register() {
        this.serviceContainer.singleton('ModelFactory', () => {
            return new ModelFactory()
        })
        this.serviceContainer.singleton('ComponentFactory', () => {
            return new ComponentFactory()
        })
    }
}

export default AppServiceProvider