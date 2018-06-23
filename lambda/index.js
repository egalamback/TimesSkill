/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};

const TodaysTimesRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TodaysGymTimesIntent';
    },
    handle(handlerInput) {
        let day = new Date().getDay();
        let speechText = '';
        if (day === 1) {
            speechText = `Today there are no open gym times`;
        }
        else if (day === 2) {
            speechText = 'Today there are open gym hours from 2:30 PM to 3:10 PM';
        }
        else if (day === 3) {
            speechText = 'Today there are open gym hours from 8:15 AM to 8:55 AM and from 2:40 PM to 3:20 PM';
        }
        else if (day === 4) {
            speechText = 'Today there are no open gym times';
        }
        else if (day === 5) {
            speechText = 'Today class is at 10:15 AM and open hours are from 5:10 PM to 5:55 PM';
        }
        else {
            speechText = 'Today there are no open gym times';
        }

        return handlerInput.responseBuilder
            .withShouldEndSession(true)
            .speak(speechText)
            .withSimpleCard('', speechText)
            .getResponse();
    },
};

const WigglesTimesRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WigglesTimesIntent';
    },
    handle(handlerInput) {
        let speechText = '';
        let d = new Date();
        if (d.getDay() === 2 && d.getHours() < 10) {
            speechText = 'The wiggles have a concert today at 10am';
        }
        else {
            speechText = 'The wiggles have a concert tuesday at 10am';
        }
        return handlerInput.responseBuilder
            .withShouldEndSession(true)
            .speak(speechText)
            .withSimpleCard('', speechText)
            .getResponse();
    },
};

const SwimClassTimesRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SwimClassTimesIntent';
    },
    handle(handlerInput) {
        let speechText = '';
        let d = new Date();
        if (d.getDay() === 1 && d.getHours() < 18) {
            speechText = 'Swim class is today at 6 PM';
        }
        else {
            speechText = 'Swim class is Moday at 6 PM';
        }
        return handlerInput.responseBuilder
            .withShouldEndSession(true)
            .speak(speechText)
            .withSimpleCard('', speechText)
            .getResponse();
    },
};

const DayOfWeekTimesRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GymDayOfWeekTimesIntent';
    },
    handle(handlerInput) {
        const day = handlerInput.requestEnvelope.request.intent.slots.day.value;
        let speechText = '';
        if (day.includes('monday')) {
            speechText = `On Monday there are no open hours`;
        }
        else if (day.includes('tuesday')) {
            speechText = 'On Tuesday there are open hours from 2:30 PM to 3:10 PM';
        }
        else if (day.includes('wednesday')) {
            speechText = 'On Wednesday there are open hours from 8:15 AM to 8:55 AM and from 2:40 PM to 3:20 PM';
        }
        else if (day.includes('thursday')) {
            speechText = 'On Thursday there are no open hours';
        }
        else if (day.includes('friday')) {
            speechText = 'On Friday class is at 10:15 AM and there are open hours from 5:10 PM to 5:55 PM';
        }
        else {
            speechText = `Something is odd, the solt value is ${JSON.stringify(handlerInput.requestEnvelope.request.intent.slots)}`;
        }

        return handlerInput.responseBuilder
            .withShouldEndSession(true)
            .speak(speechText)
            .withSimpleCard('', speechText)
            .getResponse();
    },
};

const TheBestIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TheBestIntent';
    },
    handle(handlerInput) {
        const speechText = 'You are the best!';

        return handlerInput.responseBuilder
            .withShouldEndSession(true)
            .speak(speechText)
            .withSimpleCard('', speechText)
            .getResponse();
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        return handlerInput.responseBuilder.getResponse();
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please say again.')
            .reprompt('Sorry, I can\'t understand the command. Please say again.')
            .getResponse();
    },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        TodaysTimesRequestHandler,
        DayOfWeekTimesRequestHandler,
        WigglesTimesRequestHandler,
        SwimClassTimesRequestHandler,
        TheBestIntentHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();