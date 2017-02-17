import {getHome} from '../../reducers';
import {Actions} from 'react-native-router-flux';
import Tts from 'react-native-tts';

export const nextSyllable = () => ((dispatch, getState) => {
    dispatch({type: 'NEXT_SYLLABLE'});
});

export const speechSpeak = (text) => ((dispatch, getState) => {
    Tts.speak(text)
        .then((result) => {
            dispatch({type: 'SPEECH_FINISHED', payload: result});
        }, (error) => {
            dispatch({type: 'SPEECH_ERROR', payload: error});
        })
        .catch((error) => {
            dispatch({type: 'SPEECH_ERROR', payload: error});
        });
    dispatch({type: 'SPEECH_STARTED'});
});

export const speechStop = () => ((dispatch, getState) => {
    Tts.stop()
        .then((result) => {
            dispatch({type: 'SPEECH_STOPPED', payload: event});
        }, (error) => {
            dispatch({type: 'SPEECH_ERROR', payload: error});
        })
        .catch((error) => {
            dispatch({type: 'SPEECH_ERROR', payload: error});
        });
    dispatch({type: 'SPEECH_REQUEST_STOP'});
});
