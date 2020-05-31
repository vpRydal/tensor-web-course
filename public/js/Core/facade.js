/**
 * @module Facade
 * @export Facade
 */

/**
 * @class Facade
 *
 */
class Facade {
    /**
     * @property
     * @static
     * @private
     */
    static _serviceContainer

    constructor() {

    }

    /**
     * @static
     * @property
     * @return {ServiceContainer}
     */
    static get serviceContainer() {
        return self._serviceContainer
    }
    /**
     * @static
     * @property
     * @param {ServiceContainer} serviceContainer
     */
    static set serviceContainer(serviceContainer) {
        self._serviceContainer = serviceContainer
    }
}

export default Facade