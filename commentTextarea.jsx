var React = require('react');
var ReactDOM = require('react-dom');

var CommentTextarea = React.createClass({
    render: function() {
        return <div className="form-group">
                    <label htmlFor={this.props.textareaId}>{this.props.textareaLabel}</label>
                    <textarea name={this.props.textareaId} id={this.props.textareaId} className="form-control"></textarea>
                </div>;
    },
    componentDidMount: function() {
        console.log(this.props.inputId);
    }
});
ReactDOM.render(<CommentTextarea textareaId="comment" textareaLabel="Comment" />, document.getElementById('commentDiv'));
