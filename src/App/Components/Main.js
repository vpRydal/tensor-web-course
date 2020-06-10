import School from "../../App/Models/school";
import * as React from "react";
import {Router, Route, NavLink, BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'

let history = createBrowserHistory();


class Main extends React.Component {
    'use strict';

    constructor(props) {
        super(props);

        this.state = {
            schools: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        School.get().then(schools => {
            let _schools = {};

            schools.forEach(school => {
                const id = school.id

                _schools[id] = school
            })

            this.setState({
                schools: _schools,
                isLoaded: true
            })
        })
    }

    render() {
        let content;

        if (!this.state.isLoaded) {
            content = (<span>Loaded...</span>)
        } else {
            let links = []

            Object.keys(this.state.schools).forEach(id => {
                links.push((
                    <li className="schools-container-item" key={id}>
                        <NavLink className="schools-container-item-link" to={`/school/${id}`} key={id}>
                            {this.state.schools[id].name}
                        </NavLink>
                    </li>))
            });
            content = links
        }
        return (
            <main className="content container container__LG">
                <BrowserRouter>
                    <div className="schools">
                        <h2 className="schools-title">Наши школы</h2>
                        <ul className="schools-container">
                            {content}
                        </ul>
                    </div>
                    <Route path={'/school/:id'} component={require('./Schools').default}/>
                </BrowserRouter>
            </main>
        );
    }
}

export default Main