import Component from "./component.js";
import ComponentFactory from "../Factory/componentFactory.js";
import Avatar from "./avatar.js";

class Main extends Component {
    'use strict';

    constructor(options) {
        super(options);
    }

    render(options) {
        return `
            <main id="content" class="container container__LG">
            </main>
        `
    }

    afterMount() {
        let date = new Date()

        ComponentFactory.create(Avatar, {
            photoPath: '/img/ava01.jpg',
            fio: 'Иван Петров',
            schoolNameAndYear: 'СевГУ 4',
            birthDate:date,
        }).mount(this._container);

        ComponentFactory.create(Avatar, {
            photoPath: '/img/ava02.jpg',
            fio: 'Петр Иванов',
            schoolNameAndYear: 'УГТУ 1',
            birthDate:date,
        }).mount(this._container);

        ComponentFactory.create(Avatar, {
            photoPath: '/img/ava03.jpg',
            fio: 'Андрей Сидоров',
            schoolNameAndYear: 'УГТУ 3',
            birthDate:date,
        }).mount(this._container);

        ComponentFactory.create(Avatar, {
            photoPath: '/img/ava04.jpg',
            fio: 'Валерий Николаев',
            schoolNameAndYear: 'СевГУ 1',
            birthDate:date,
        }).mount(this._container);

        ComponentFactory.create(Avatar, {
            photoPath: '/img/ava05.jpg',
            fio: 'Иван Петров',
            schoolNameAndYear: 'УГТУ 2',
            birthDate:date,
        }).mount(this._container);

        ComponentFactory.create(Avatar, {
            photoPath: '/img/ava06.jpg',
            fio: 'Иван Петров',
            schoolNameAndYear: 'СевГУ 5',
            birthDate:date,
        }).mount(this._container);
    }
}

export default Main