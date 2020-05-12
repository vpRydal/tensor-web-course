/**
 * @module Provider
 * @export Provider
 */


/**
 * @class HTMLManipulator
 *
 * @method register
 * @method init
 */
class Provider {
    _serviceContainer

    constructor(serviceContainer) {
        this._serviceContainer = serviceContainer
    }

    get serviceContainer() {
        return this._serviceContainer
    }

    /**
     * @abstract
     * */
    register() {
    }

    init() {
        this.register()
    }
}

export default Provider