/**
 * @module School
 * @export School
 */

/**
 * @class School
 *
 * @property students
 * @property teachers
 * @property name
 *
 * @private _name
 * @private _teachers
 * @private _students
 *
 * @method addTeacher
 * @method addStudent
 */
class School {
    /**
     * @constructor
     * @param {{students: [Student], teachers: [Teacher], name: string}} args
     */
    constructor(args={}) {
        this._teachers = []
        this._students = []

        this.students = args.students || []
        this.teachers = args.teachers || []
        this._name = args.name || ''
    }

    /**
     * @param {string} name
     *
     * @return Student
     */
    getStudentByName(name) {
        return this._students.find((student) => {
            return student.fio.name === name
        })
    }

    /**
     * @param {string} name
     *
     * @return Teacher
     */
    getTeacherByName(name) {
        return this._teachers.find((teacher) => {
            return teacher.fio.name === name
        })
    }

    /**
     * @param {Teacher} teachers
     */
    addTeacher(teachers) {
        teachers.university = this

        this._teachers.push(teachers)
    }
    /**
     * @param {Student} student
     */
    addStudent(student) {
        student.school = this

        this._students.push(student)
    }

    /**
     * @return {[Student]}
     */
    get students() {
        return this._students
    }
    /**
     * @return {[Teacher]}
     */
    get teachers() {
        return this._teachers
    }
    /**
     * @return {string}
     */
    get name() {
        return this._name
    }

    /**
     * @param {[Student]} students
     */
    set students(students) {
        students.forEach(student => {
            this.addStudent(student)
        })
    }
    /**
     * @param {[Teacher]} teachers
     */
    set teachers(teachers) {
        teachers.forEach(teacher => {
            this.addTeacher(teacher)
        })
    }
    /**
     * @param {string} name
     */
    set name(name) {
        this._name = name
    }
}

export default School