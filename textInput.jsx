import React from 'react';
import ReactDOM from 'react-dom';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <div className="form-group">
                    <label htmlFor={this.props.inputId}>{this.props.inputLabel}</label>
                    <input type="text"
                           name={this.props.inputId}
                           id={this.props.inputId}
                           className="form-control" />
                </div>
                );
    }

    componentDidMount() {
        console.log(this.props.inputId);
    }
}

export default TextInput;
