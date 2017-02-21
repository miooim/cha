const DEFAULT_STATE = {
    tts_status: 'READY'
};

export default(state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'TTS_SPEECH_STARTED':
            return {
                ...state,
                ttsStatus: 'TALKING'
            };
        case 'TTS_SPEECH_FINISHED':
            return {
                ...state,
                ttsStatus: 'READY'
            }
        default:
            return state;
    }
};
