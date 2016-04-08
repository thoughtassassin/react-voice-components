/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	(function(){
	    'use strict';
	    var final_transcript;
	    var recognizing = false;
	    var ignore_onend;
	    var currentlySelectedElement = {}; //initialize selected element

	    var nameElement    = document.getElementById('name');
	    var emailElement   = document.getElementById('email');
	    var commentElement = document.getElementById('comment');
	    var speakButton    = document.getElementById('speak-button');
	    speakButton.addEventListener('click', speak);

	    function speak(event) {
	        if (recognizing) {
	            recognizing = false;
	            recognition.stop();
	            return;
	        }
	        final_transcript = '';
	        recognition.lang = 'en-US';
	        recognition.start();
	    }

	    function giveInputFocus(word) {
	        console.log('words from giveInputFocus' + word);
	        if (word == 'name') {
	            currentlySelectedElement = nameElement;
	        }

	        if (word == 'email') {
	            currentlySelectedElement = emailElement;
	        }

	        if (word == 'comment') {
	            currentlySelectedElement = commentElement;
	        }
	        currentlySelectedElement.focus();
	    }

	    if (!('webkitSpeechRecognition' in window)) {
	        speakButton.style.display = 'none';
	    } else {
	        var recognition = new webkitSpeechRecognition();
	        recognition.continuous = true;
	        recognition.interimResults = true;

	        recognition.onstart = function() {
	            recognizing = true;
	            speakButton.style.opacity = 1;

	        };

	        recognition.onresult = function(event) {
	            var final_transcript = '';

	            for (var i = event.resultIndex; i < event.results.length; ++i) {
	                if (event.results[i].isFinal) {
	                    final_transcript += event.results[i][0].transcript;

	                    giveInputFocus(final_transcript.trim());

	                    if (final_transcript.trim() != 'name' &&
	                        final_transcript.trim() != 'email' &&
	                        final_transcript.trim() != 'comment') {
	                            currentlySelectedElement.value = final_transcript;
	                    }

	                }
	            }
	        };

	        recognition.onerror = function(event) {
	            if (event.error == 'no-speech' ||
	                event.error == 'audio-capture' ||
	                event.error == 'not-allowed') {
	                speakButton.style.opacity = 0.5;
	                ignore_onend = true;
	            }
	        };

	        recognition.onend = function() {
	            recognizing = false;
	            if (ignore_onend) {
	                return;
	            }
	            speakButton.style.opacity = 0.5;
	            currentlySelectedElement.blur();
	        };
	    }

	})();


/***/ }
/******/ ]);