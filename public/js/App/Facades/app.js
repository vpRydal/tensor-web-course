/**
 * @module App
 * @export App
 */

import Facade from "../../Core/facade.js";

/**
 * @class App
 *
 * @method get
 */
class App extends Facade {

    static get(alias) {
        return this.serviceContainer.get(alias)
    }
}

export default App