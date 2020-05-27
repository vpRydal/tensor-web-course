import Component from "./component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import HonorBoard from "./honorBoard.js";
import Students from "./students.js";

class Main extends Component {
    'use strict';

    constructor(options) {
        super(options);
    }

    render(options) {
        return `
            <main class="content">
            </main>
        `
    }

    afterMount() {
        ComponentFactory.create(Students, {
        }).mount(this._container);
        ComponentFactory.create(HonorBoard, {
        }).mount(this._container);
    }
}

export default Main