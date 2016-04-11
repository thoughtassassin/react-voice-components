import React from 'react';
import ReactDOM from 'react-dom';

class CommentTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="form-group">
                    <label htmlFor={this.props.textareaId}>{this.props.textareaLabel}</label>
                    <textarea name={this.props.textareaId} id={this.props.textareaId} className="form-control"></textarea>
                </div>;
    }

    componentDidMount() {
        console.log(this.props.textareaId);
    }
}

export default CommentTextarea;
