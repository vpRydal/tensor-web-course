/**
 * @module ServiceContainer
 * @export ServiceContainer
 */

const SINGLETON = 'singleton'
const DEFAULT = 'default'

/**
 * @class ServiceContainer
 *
 * @method get
 * @method register
 * @method singleton
 */
class ServiceContainer {

    constructor() {
        this._container = {}
        this._singletons = {}
    }

    get(alias) {
        let object = this._container[alias]

        if (!object) {
            console.error('Unknown alias')

            return undefined
        }

        if (object.type === SINGLETON) {
            let singleton = this._singletons[alias]

            if (singleton) {
                return singleton
            } else {
                this._singletons[alias] = object.createCallback.call()

                return this._singletons[alias]
            }
        } else {
            return object.createCallback.call()
        }
    }

    register(alias, createCallback) {
        this._container[alias] = {type: DEFAULT, createCallback}
    }

    singleton(alias, createCallback) {
        this._container[alias] = {type: SINGLETON, createCallback}
    }
}

export default ServiceContainer