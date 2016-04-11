import React from 'react';
import ReactDOM from 'react-dom';

class EmailInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(event) {
        let newValue = event.target.value;
        newValue = newValue.replace(/\s+/g, '');
        newValue = newValue.replace(/at/i, '@');
        newValue = newValue.toLowerCase();
        this.refs.email.value = newValue;
    }

    render() {
        return (
                <div className="form-group">
                    <label htmlFor={this.props.inputId}>{this.props.inputLabel}</label>
                    <input type="email"
                           ref="email"
                           name={this.props.inputId}
                           id={this.props.inputId}
                           className="form-control"
                           onBlur={this.handleBlur}/>
                </div>
                );
    }

    componentDidMount() {
        console.log(this.props.inputId);
    }
}

export default EmailInput;
