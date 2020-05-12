import {} from './App/bootstrap.js'
import Modal from "./ModalWindow.js";
import Factory from "./App/Facades/factory.js";

const students = [
    Factory.createStudent({
        name: 'Маша',
        secondName: 'Иванова',
        photoPath: 'img/ava1.png',
        universityYear: 2,
    }),
    Factory.createStudent({
        name: 'Миша',
        secondName: 'Петров',
        photoPath: 'img/ava2.png',
        universityYear: 3,
    }),
    Factory.createStudent({
        name: 'Марат',
        secondName: 'Сидоров',
        photoPath: 'img/ava3.png',
        universityYear: 4,
    }),
]

const teachers = [
    Factory.createTeacher({
        name: 'Марат',
        secondName: 'Сидоров',
        photoPath: 'img/ava3.png',
        position: "Лектор",
    }),
    Factory.createTeacher({
        name: 'Марат',
        secondName: 'Сидоров',
        photoPath: 'img/ava3.png',
        position: "Лектор",

    }),
    Factory.createTeacher({
        name: 'Марат',
        secondName: 'Сидоров',
        photoPath: 'img/ava3.png',
        position: "Лектор",
    }),
]

const school = Factory.createSchool({
    students,
    teachers,
    name: 'УГАТУ'
});

console.log(`Поиск студента в школе: ${school.getStudentByName('Миша').fio.full}`)
console.log(`Поиск учителя в школе: ${school.getTeacherByName('Марат').fio.full}`)

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
