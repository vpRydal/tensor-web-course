import ActiveRecord from "../../Core/activeRecord.js";
import School from "./school.js";

class Teacher extends ActiveRecord {
    _school
    _universityName

    constructor() {
        super();
    }

    get school() {
        if (this._school) {
            return new Promise((resolve => {
                resolve(this._school)
            }))
        }
        return this.belongTo('School', 'school_id', 'id').then(school => {
            this.school = school

            return school
        })
    }

    set school(school) {
        this._school = school
        this._universityName = school.name
    }

    get universityName() {
        return this._universityName
    }

    get tableName() {
        return 'teachers';
    }

    get fieldsName() {
        return ['id', 'fio', 'photo_path', 'birth_date', 'phone', 'school_id', 'position'];
    }

}

export default Teacher