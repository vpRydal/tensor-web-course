import * as React from "react";
import School from "./School";

class Schools extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cache: {

            }
        }
    }

    render() {
        const id = this.props.match.params.id

        return (<School key={id} id={id}/>)
    }

}

export default Schools