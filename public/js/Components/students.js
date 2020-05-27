import Component from "./component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import Avatar from "./avatar.js";
import Student from "../models/student.js";

class Students extends Component {
    'use strict';

    constructor(options) {
        super(options);
    }

    render(options) {
        return `
            <div class="container container__LG">
            </div>
        `
    }

    afterMount() {
        let student = new Student()

        student.select('name').get().then(students => {
            students.forEach((student => {
                ComponentFactory.create(Avatar, {
                    student
                }).mount(this._container);
            }))
        })
    }
}

export default Students