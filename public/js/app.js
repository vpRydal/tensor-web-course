import {} from './App/bootstrap.js'
import Modal from "./ModalWindow.js";
import Factory from "./App/Facades/factory.js";
import {randomInteger} from "./Core/helpers.js";


const school = Factory.createSchool({
    name: 'УГАТАУ'
})
const createStudent = (students) => {
    const avatars = ['ava1.png', 'ava2.png', 'ava3.png',]
    const _students = []

    students.forEach(student => {
        let [name, secondName] = student.name.split(' ')

        _students.push(Factory.createStudent({
            name: name,
            secondName: secondName,
            photoPath: '/img/' + avatars[randomInteger(0, avatars.length - 1)],
            universityYear: randomInteger(1, 5),
        }))

    })

    return _students;
}


fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const students = createStudent(users)

        school.students = students

        students.forEach((student => {
            let avatar = student.renderHTMLAvatar()
            document.getElementById('content').appendChild(avatar)

            let modal = new Modal()

            modal.title = 'Карточка студента'

            modal.render(student.renderCard())

            avatar.addEventListener('click', () => {
                modal.show()
            })
        }))
    })
