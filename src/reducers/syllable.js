import {syllables} from '../data';

const DEFAULT_STATE = {
    syllable: syllables[Math.floor((Math.random() * syllables.length))],
    tts_status: 'READY'
};

export default(state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'RANDOM_SYLLABLE':
            return  {
                ...state,
                syllable: syllables[Math.floor((Math.random() * syllables.length))]
            };
        default:
            return state;
    }
};
