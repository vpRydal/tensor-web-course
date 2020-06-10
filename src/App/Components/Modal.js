import * as React from "react";

class Modal extends React.Component {
    'use strict';

    constructor(props) {
        super(props);

        this.state = {
            close: true
        }

        this.props.observer.on(this.props.nameEventOpen, () => {
            this.setState({
                close: false
            })
        })
    }

    render() {

        return (
            <div className={'modal ' + (!this.state.close? 'modal__show': '')}>
                <div className="modal-dialog">

                    <div className="modal-body">
                        <div className="modal-title">
                            <h2>{this.props.title}</h2>
                            <span className="modal-close" onClick={() => {this.close()}}>х</span>
                        </div>
                        <div className="modal-content">
                            {this.props.createContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    open() {
    }

    close() {
        this.setState({
            close: true
        })
    }
}

export default Modal