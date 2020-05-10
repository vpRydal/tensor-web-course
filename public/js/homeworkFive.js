import Fio from "./fio.js";
import Student from "./student.js";
import Modal from "./ModalWindow.js";

const students = [
    new Student(new Fio('Маша', 'Иванова'), 'img/ava1.png', 'УГАТУ', 2, new Date()),
    new Student(new Fio('Миша', 'Петров'), 'img/ava2.png', 'СурГУ', 3,  new Date()),
    new Student(new Fio('Марат', 'Сидоров'), 'img/ava3.png', 'БГУ', 4,  new Date()),
]

students.forEach((student => {
    let avatar = student.renderAvatar()
    document.getElementById('content').appendChild(avatar)

    let modal = new Modal()

    modal.title = 'Карточка студента'

    modal.render(student.renderCard())

    avatar.addEventListener('click', () => {
        modal.show()
    })
}))
