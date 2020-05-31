import Component from "../../Core/component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import Avatar from "./Avatars/avatar.js";
import Student from "../Models/student.js";
import App from "../Facades/app.js";

class HonorBoard extends Component {
    'use strict';

    constructor(options) {
        super(options);
    }

    render({student}) {
        return `
        <div class="container container__LG honorBoard">
            <h2 class="honorBoard-title">Доска почета</h2>
        </div>
        `
    }

    afterMount() {
        Student.select('name').where({
            id: 6
        }).first().then(student => {
            App.get('ComponentFactory').create(Avatar, {
                student
            }).mount(this._container);
        })
    }
}

export default HonorBoard