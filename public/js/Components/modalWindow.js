import Component from "./component.js";

class ModalWindow extends Component {
    'use strict';

    constructor(options) {
        super(options);
    }

    render(options) {
        return `
        <div class="modal">
             <div class="modal-dialog">

            <div class="modal-body">
                    <div class="modal-title">
                        <h2>Карточка студента</h2>
                        <span class="modal-close">х</span>
                    </div>
                    <div class="modal-content">
                        ${options.content}
                    </div>
                </div>
            </div>
        </div>
        `
    }

    afterMount() {
        this._closeBtn = this.container.querySelector('.modal-close')
        this.subscribeTo(this._closeBtn, 'click', this.close.bind(this))
    }

    close() {
        this.container.classList.remove('modal__show')
    }

    open() {
        this.container.classList.add('modal__show')
    }
}

export default ModalWindow