import Component from "../../Core/component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import App from "../Facades/app.js";
import SchoolComponent from "../Components/school.js";
import School from "../../App/Models/school.js";


class Main extends Component {
    'use strict';
    _schools
    _currentSchool

    constructor(options) {
        super(options);
        this._schools = {}
    }

    async beforeMount() {
        await School.get().then(schools => {
            schools.forEach(school => {
                const id = school.id

                this._schools[id] = school
            })
        })
    }

    render(options) {
        let schoolsOption = ''

        Object.keys(this._schools).forEach(id => {
            schoolsOption += `
                    <option value="${id}">
                        ${this._schools[id].name}
                    </option>
            `
        })

        return `
            <main class="content container container__LG">
                <label for="currentSchool">Школа</label>
                <select id="currentSchool">
                    ${schoolsOption}
                </select>
            </main>
        `
    }

    afterMount() {
        this.subscribeTo(document.getElementById('currentSchool'), 'change', this.changedSchool.bind(this))

        Object.keys(this._schools).forEach(id => {
            this._schools[id] = App.get('ComponentFactory').create(SchoolComponent, {school: this._schools[id]})
        })

        this._currentSchool = this._schools[Object.keys(this._schools)[0]]
        this._currentSchool.mount(this.container).then(() => {
            this._currentSchool.show()

        })
    }

    changedSchool(event) {
        const id = event.target.value

        this._currentSchool.hide();

        if (!this._schools[id].isMounted()) {
            this._schools[id].mount(this.container).then(() => {
                this._schools[id].show()
            })
        } else {
            this._schools[id].show()
        }

        this._currentSchool = this._schools[id];
    }
}

export default Main