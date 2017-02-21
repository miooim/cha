import Voice from 'react-native-voice';

export const sttSetup = () => ((dispatch, getState) => {
    Voice.isAvailable((result) => {
        if (result) {
            Voice.onSpeechStart = (e) => dispatch({type: 'STT_STARTED'});
            Voice.onSpeechRecognized = (e) => dispatch({type: 'STT_RECOGNIZED', payload: e});
            Voice.onSpeechEnd = (e) => dispatch({type: 'STT_STOPPED', payload: e});
            Voice.onSpeechError = (e) => dispatch({type: 'STT_ERROR', payload: e.error});
            Voice.onSpeechResults = (e) => dispatch({type: 'STT_RESULTS', payload: e.value});
            Voice.onSpeechPartialResults = (e) => dispatch({type: 'STT_PARTIAL_RESULTS', payload: e});
            Voice.onSpeechVolumeChanged = (e) => dispatch({type: 'STT_VOLUME_CHANGED', payload: e.value});
            dispatch({type: 'STT_READY'});
        } else {
            dispatch({type: 'STT_UNAVAILABLE', payload: result});
        }
    })
});

export const sttCancel = () => ((dispatch, getState) => {
    Voice.cancel();
    dispatch({type: 'STT_CANCEL'});
});

export const sttDestroy = () => ((dispatch, getState) => {
    Voice.destroy();
    dispatch({type: 'STT_DESTROY'});
});

export const sttIsRecognizing = () => ((dispatch, getState) => {
    const r = Voice.isRecognizing();
    dispatch({type: 'STT_IS_RECOGNIZING', payload: r});
});

export const sttStart = (locale) => ((dispatch, getState) => {
    Voice.start(locale)
    dispatch({type: 'STT_START'});
});

export const sttStop = () => ((dispatch, getState) => {
    Voice.stop()
    dispatch({type: 'STT_STOP'});
});

export const sttClear = () => ((dispatch, getState) => {
    dispatch({type: 'STT_CLEAR'});
});
