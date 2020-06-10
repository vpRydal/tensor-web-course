import * as React from "react";

class Teacher extends React.Component {
    render() {
        const teacher = this.props.teacher
        const birth_date = new Date(teacher.birth_date)

        return (
            <div className="card">
                <div className="card-info">
                    <h2 className="card-info-name">{teacher.fio}</h2>
                    <div className="card-info-row">
                        <span className="card-info-row-name">Место работы</span>
                        <span className="card-info-row-value">{teacher.universityName}</span>
                    </div>
                    <div className="card-info-row">
                        <span className="card-info-row-name">Должность</span>
                        <span className="card-info-row-value">{teacher.position}</span>
                    </div>
                    <div className="card-info-row">
                        <span className="card-info-row-name">День рождения</span>
                        <span
                            className="card-info-row-value">{birth_date.getDay()}.{birth_date.getMonth()}.{birth_date.getFullYear()}</span>
                    </div>
                </div>
                <img src={'/' + teacher.photo_path} alt="Аватарка" className="card-img"/>
            </div>
        )
    }
}

export default Teacher