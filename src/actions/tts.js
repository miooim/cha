import Tts from 'react-native-tts';

export const ttsSpeak = (text) => ((dispatch, getState) => {
    Tts.speak(text)
        .then((result) => {
            dispatch({type: 'TTS_SPEECH_FINISHED', payload: result});
        }, (error) => {
            dispatch({type: 'TTS_SPEECH_ERROR', payload: error});
        })
        .catch((error) => {
            dispatch({type: 'TTS_SPEECH_ERROR', payload: error});
        });
    dispatch({type: 'TTS_SPEECH_STARTED'});
});

export const ttsStop = () => ((dispatch, getState) => {
    Tts.stop()
        .then((result) => {
            dispatch({type: 'TTS_SPEECH_STOPPED', payload: event});
        }, (error) => {
            dispatch({type: 'TTS_SPEECH_ERROR', payload: error});
        })
        .catch((error) => {
            dispatch({type: 'TTS_SPEECH_ERROR', payload: error});
        });
    dispatch({type: 'TTS_SPEECH_REQUEST_STOP'});
});
