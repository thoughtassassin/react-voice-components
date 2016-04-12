import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './textInput';
import EmailInput from './emailInput';
import CommentTextarea from './commentTextarea';
import Voice from './voice';

'use strict';

//create React components
ReactDOM.render(<TextInput inputId="name" inputLabel="Name" />, document.getElementById('nameDiv'));
ReactDOM.render(<EmailInput inputId="email" inputLabel="Email" />, document.getElementById('emailDiv'));
ReactDOM.render(<CommentTextarea textareaId="comment" textareaLabel="Comment" />, document.getElementById('commentDiv'));

//initialize speech capability
Voice(['name','email','comment'], 'speak-button');
