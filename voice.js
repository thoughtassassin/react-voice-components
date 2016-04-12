var Voice = function(formElementsList, formButton) {
    formElementsList = formElementsList || [];
    formButton = formButton || {};
    //begin voice-api logic
    var formElements = [];
    var final_transcript;
    var recognizing = false;
    var ignore_onend;
    var currentlySelectedElement = {}; //initialize selected element
    var speakButton = document.getElementById(formButton);

    //get input items that will listen for voice commands
    formElementsList.forEach(function(el) {
        formElements.push(document.getElementById(el));
    });

    //add click listener to speak button
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
        if (formElementsList.indexOf(word) > -1) {
            formElements.forEach(function(el) {
                if (el.id == word)
                {
                    currentlySelectedElement = el;
                }
            });
            currentlySelectedElement.focus();
        }
    }

    //Check for SpeechRecognition and initialize SpeechRecognition calls
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

                    if (formElementsList.indexOf(final_transcript.trim()) == -1) {
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

}

export default Voice;
