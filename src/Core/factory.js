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
     */
    create(args) {}
}

export default Factory