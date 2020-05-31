import Component from "../../Core/component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import Avatar from "./Avatars/avatar.js";
import Student from "../Models/student.js";
import App from "../Facades/app.js";

class SchoolPerson extends Component {
    'use strict';

    constructor(options) {
        super(options);
    }

    render(options) {
        return `
            <div>
                <h2>${options.title || ""}</h2>
                <div class="${options.containerClass}" id="${options.containerClass + this._id}">
                </div>
            </div>
            
        `
    }s

    afterMount({persons, personAvatarClass}) {
        persons.then(persons => {
            persons.forEach((person => {
                App.get('ComponentFactory').create(personAvatarClass, {
                    person
                }).mount(
                    document.getElementById(this._options.containerClass + this._id)
                );
            }))
        })
    }
}

export default SchoolPerson