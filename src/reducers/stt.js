const DEFAULT_STATE = {
    sttStatus: 'INITIAL'
};

export default(state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'STT_READY':
            return {
                ...state,
                sttStatus: 'READY'
            };
        case 'STT_IS_AVAILABLE':
            return {
                ...state,
                sttStatus: payload ? 'UNCONFIGURED' : 'UNAVAILABLE'
            }
        case 'STT_CANCEL':
            return {
                ...state,
                sttStatus: 'READY'
            }
        case 'STT_DESTROY':
            return {
                ...state,
                sttStatus: 'READY'
            }
        case 'STT_IS_RECOGNIZING':
            return {
                ...state,
                stt: payload,
                sttStatus: 'RECOGNIZING'
            }
        case 'STT_START':
            return {
                ...state,
                sttStatus: 'RECOGNIZING'
            }
        case 'STT_STOP':
            return {
                ...state,
                sttStatus: 'READY'
            }
        case 'STT_ERROR':
            return {
                ...state,
                error: payload,
                sttStatus: 'ERROR'
            }
        case 'STT_STARTED':
            return {
                ...state,
                stt: payload,
                sttStatus: 'RECOGNIZING'
            }
        case 'STT_RECOGNIZED':
            return {
                ...state,
                stt: payload,
                sttStatus: 'RECOGNIZED'
            }
        case 'STT_STOPPED':
            return {
                ...state,
                stt: payload,
                sttStatus: 'READY'
            }
        case 'STT_RESULTS':
            return {
                ...state,
                sttResult: payload,
                sttStatus: 'READY'
            }
        case 'STT_PARTIAL_RESULTS':
            return {
                ...state,
                sttLastPartialResult: payload,
                sttStatus: 'RESULTS'
            }
        case 'STT_VOLUME_CHANGED':
            return {
                ...state,
                sttVolume: payload,
                sttStatus: 'VOLUME_CHANGED'
            }
        case 'STT_READY':
            return {
                ...state,
                sttStatus: 'READY'
            }
        case 'STT_CLEAR':
            return {
                ...state,
                sttResult: null,
                error: null,
                sttStatus: 'READY'
            }
        default:
            return state;
    }
};
