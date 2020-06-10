import * as React from "react";

class Student extends React.Component {
    'use strict';

    constructor(props) {
        super(props);

    }

    render() {
        let student = this.props.student

        return (
            <div className="avatar avatar__rounded" onClick={() => {this.openModal()}}>
                <img src={'/' + student.photo_path} alt="Аватарка" className="avatar-img"/>
                <span className="avatar-name">{student.fio}</span>
                <span className="avatar-university">{student.study_year} Курс</span>
            </div>
        )
    }

    openModal() {
        this.props.observer.emit(this.props.nameEventOpen)
    }
}

export default Student