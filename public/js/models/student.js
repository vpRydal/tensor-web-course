import ActiveRecord from "../Core/activeRecord.js";

class Student extends ActiveRecord {
    constructor() {
        super('student', ['fio', 'photo_path', 'study', 'birth_date', 'phone', 'active']);
    }
}

export default Student