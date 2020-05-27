import Component from "./component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import Avatar from "./avatar.js";
import Student from "../models/student.js";

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
        let student = new Student()

        student.select('name').where({
            id: 6
        }).first().then(student => {
            ComponentFactory.create(Avatar, {
                student
            }).mount(this._container);
        })
    }
}

export default HonorBoard