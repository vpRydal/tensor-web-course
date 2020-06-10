import * as React from "react";

class Student extends React.Component {
    render() {
        const student = this.props.student
        const birth_date = new Date(student.birth_date)

        return (
            <div className="card">
                <div className="card-info">
                    <h2 className="card-info-name">{student.fio}</h2>
                    <div className="card-info-row">
                        <span className="card-info-row-name">Вуз</span>
                        <span className="card-info-row-value">{student.study} {student.study_year} Курс</span>
                    </div>
                    <div className="card-info-row">
                        <span className="card-info-row-name">День рождения</span>
                        <span
                            className="card-info-row-value">{birth_date.getDay()}.{birth_date.getMonth()}.{birth_date.getFullYear()}</span>
                    </div>
                </div>
                <img src={'/' + student.photo_path} alt="Аватарка" className="card-img"/>
            </div>
        )
    }
}

export default Student