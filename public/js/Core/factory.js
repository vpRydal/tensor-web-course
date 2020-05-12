/**
 * @module Factory
 * @export Factory
 */

/**
 * @class Factory
 * @abstract
 *
 * @method create
 */
class Factory {
    /**
     * @constructor
     */
    constructor() {
    }

    /**
     * @abstract
     * @param {array} args
     */
    create(args) {}
}

export default Factory