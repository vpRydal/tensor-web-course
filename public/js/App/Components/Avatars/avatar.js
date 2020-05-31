import Component from "../../../Core/component.js";
import ComponentFactory from "../../Factory/componentFactory.js";
import ModalWindow from "../modalWindow.js";
import App from "../../Facades/app.js";

class Avatar extends Component {
    'use strict';

    constructor(options) {
        super(options);

        this._modalCard = undefined
    }

    /**
     * @abstract
     * @param options
     */
    render(options) {
    }

    afterMount() {
        this.subscribeTo(this._container, 'click', this.openCard.bind(this))
    }
    /**
     * @abstract
     */
    openCard() {
    }
}

export default Avatar