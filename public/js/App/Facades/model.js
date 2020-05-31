/**
 * @module Model
 * @export Model
 */

import Facade from "../../Core/facade.js";
import App from "./app.js";

/**
 * @class Model
 *
 * @method getInstance
 * @method getClassModel
 */
class Model extends Facade {
    static _models

    static getClassModel(alias) {
        if(!this._models[alias]) {
            console.error('Unknown alias')
        }

        return this._models[alias]
    }

    static getInstance(alias) {
        const model = App.get('ModelFactory').create(this.getClassModel(alias), {})

        return model
    }
}

export default Model