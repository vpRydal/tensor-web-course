import ActiveRecord from "../../Core/activeRecord.js";
import School from "./school.js";

class Student extends ActiveRecord {
    _school
    _study

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

    get tableName() {
        return 'students';
    }

    get fieldsName() {
        return ['id', 'fio', 'photo_path', 'study', 'birth_date', 'phone', 'active', 'school_id', 'study_year'];
    }

    set school(school) {
        this._school = school
        this._study = school.name
    }

    get study() {
        return this._study
    }

}

export default Student