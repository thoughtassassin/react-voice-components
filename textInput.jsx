var React = require('react');
var ReactDOM = require('react-dom');

var TextInput = React.createClass({
    render: function() {
        return <div className="form-group">
                    <label htmlFor={this.props.inputId}>{this.props.inputLabel}</label>
                    <input type="text" name={this.props.inputId} id={this.props.inputId} className="form-control" />
                </div>;
    },
    componentDidMount: function() {
        console.log(this.props.inputId);
    }
});
ReactDOM.render(<TextInput inputId="name" inputLabel="Name" />, document.getElementById('nameDiv'));
