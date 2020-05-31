import Component from "../../Core/component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import App from "../Facades/app.js";
import SchoolPerson from "./schoolPerson.js";
import StudentAvatar from "./Avatars/student.js";
import TeacherAvatar from "./Avatars/teacher.js";

class SchoolComponent extends Component {
    'use strict';
    _schools

    constructor(options) {
        super(options);
        this._schools = {}
    }

    render(options) {
        return `
            <div class="school">
            </div>
        `
    }

    afterMount({school}) {
        const students = App.get('ComponentFactory').create(SchoolPerson, {
            persons: school.students,
            personAvatarClass: StudentAvatar,
            title: 'Наши студенты',
            containerClass: 'school-students'
        })

        students.mount(this.container)

        const teachers = App.get('ComponentFactory').create(SchoolPerson, {
            persons: school.teachers,
            personAvatarClass: TeacherAvatar,
            title: 'Наши препадаватели',
            containerClass: 'school-students'
        })

        teachers.mount(this.container)
    }
}

export default SchoolComponent