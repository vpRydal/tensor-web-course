/**
 * @module AppServiceProvider
 * @export AppServiceProvider
 */

import Provider from "../../Core/provider.js";
import ModelFactory from "../Factory/modelFactory.js";
import ComponentFactory from "../Factory/componentFactory.js";
import Observer from "../Observer";

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
        this.serviceContainer.singleton('Observer', () => {
            return new Observer()
        })
    }
}

export default AppServiceProvider