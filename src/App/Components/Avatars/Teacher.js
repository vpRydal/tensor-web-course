import * as React from "react";

class TeacherAvatar extends React.Component {
    'use strict';

    constructor(props) {
        super(props);
    }

    render() {
        let teacher = this.props.teacher

        return (
            <div className="avatar avatar__rounded" onClick={() => {this.openModal()}}>
                <img src={'/' + teacher.photo_path} alt="Аватарка" className="avatar-img"/>
                    <span className="avatar-name">{teacher.fio}</span>
                    <span className="avatar-university">{teacher.position}</span>
            </div>
        )
    }

    openModal() {
        this.props.observer.emit(this.props.nameEventOpen)
    }
}

export default TeacherAvatar