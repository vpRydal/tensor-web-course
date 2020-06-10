import Student from "./Avatars/Student.js";
import * as React from "react";
import Teacher from "./Avatars/Teacher";
import Model from "../Facades/model";
import Modal from "./Modal";
import App from "../Facades/app";

class School extends React.Component {
    'use strict';

    constructor(props) {
        super(props);
        this.state = {
            students: {
                items: null,
                isLoaded: false
            },
            teachers: {
                items: null,
                isLoaded: false
            },
            school: {
                item: null,
                isLoaded: false
            },
        }
    }

    componentDidMount() {
        Model.getClassModel('School').where({
            id: this.props.id
        }).first().then(school => {
            this.setState({school: {item: school, isLoaded: true}})

            school.students.then(students => {
                this.setState({students: {items: students, isLoaded: true}})
            })
            school.teachers.then(teachers => {
                this.setState({teachers: {items: teachers, isLoaded: true}})
            })
        })
    }

    render() {
        let schoolName, students, teachers

        schoolName = (<span>Loading...</span>)
        students = schoolName
        teachers = schoolName

        if (this.state.school.isLoaded) {
            schoolName = this.state.school.item.name
        }
        if (this.state.students.isLoaded) {
            let Card = require('./Cards/Student').default

            students = this.createPersonComponents(this.state.students.items, (_student) => {
                let eventOpenName = `OpenModal-Student-${_student.id}`

                return (
                    <div key={`${_student.id}`}>
                        <Student
                            student={_student}
                            nameEventOpen={eventOpenName}
                            observer={App.get('Observer')}
                        />
                        <Modal
                            nameEventOpen={eventOpenName}
                            createContent={() => (<Card student={_student}/>)}
                            title={`Карточка студента`}
                            observer={App.get('Observer')}
                        />
                    </div>
                )
            })
        }
        if (this.state.teachers.isLoaded) {
            let Card = require('./Cards/Teacher').default

            teachers = this.createPersonComponents(this.state.teachers.items, (_teacher) => {
                let eventOpenName = `OpenModal-Teacher-${_teacher.id}`

                return (
                    <div key={`${_teacher.id}`}>
                        <Teacher
                            teacher={_teacher}
                            nameEventOpen={eventOpenName}
                            observer={App.get('Observer')}
                        />
                        <Modal
                            nameEventOpen={eventOpenName}
                            createContent={() => (<Card teacher={_teacher}/>)}
                            title={`Карточка преподователя`}
                            observer={App.get('Observer')}
                        />
                    </div>
                )
            })
        }


        return (
            <div className="school">
                <h1 className="school-title">
                    {schoolName}
                </h1>
                <h2>Наши студенты</h2>
                <div className="school-students">
                    {students}
                </div>
                <h2>Наши препадователи</h2>
                <div className="school-teachers">
                    {teachers}
                </div>
            </div>
        )
    }

    createPersonComponents(items, callback) {
        const components = []

        items.forEach(person => {
            components.push(callback(person))
        })

        return components
    }
}

export default School