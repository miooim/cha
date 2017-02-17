import {syllables} from '../data';

const DEFAULT_STATE = {
    syllable: syllables[Math.floor((Math.random() * syllables.length))]
};

export default(state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case 'NEXT_SYLLABLE':
            const st = {
                ...state,
                syllable: syllables[Math.floor((Math.random() * syllables.length))],
            };
            return st;
        default:
            return state;
    }
};
