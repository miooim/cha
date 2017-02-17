import {syllables} from '../data';

const DEFAULT_STATE = {
    syllable: syllables[Math.floor((Math.random() * syllables.length))],
    tts_status: 'READY'
};

export default(state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'NEXT_SYLLABLE':
            return  {
                ...state,
                syllable: syllables[Math.floor((Math.random() * syllables.length))]
            };
        case 'SPEECH_STARTED':
            return {
                ...state,
                tts_status: 'TALKING'
            };
        case 'SPEECH_FINISHED':
            return {
                ...state,
                tts_status: 'READY'
            }
        default:
            return state;
    }
};
