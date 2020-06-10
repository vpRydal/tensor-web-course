import ActiveRecord from "../../Core/activeRecord.js";

class School extends ActiveRecord {
    get tableName() {
        return 'schools';
    }

    get fieldsName() {
        return ['name', 'id'];
    }

    get students() {
        return this.hasMany('Student', 'school_id', 'id').then(students => {
            students.forEach(student => {
                student.school = this
            })

            return students
        })
    }

    get teachers() {
        return this.hasMany('Teacher', 'school_id', 'id').then(teachers => {
            teachers.forEach(teacher => {
                teacher.school = this
            })

            return teachers
        })
    }
}

export default School