import { createAction } from 'redux-actions';

export const getRandomSyllable = () => ((dispatch, getState) => {
    dispatch({type: 'RANDOM_SYLLABLE'});
});