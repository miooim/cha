import {getHome} from '../../reducers';
import {Actions} from 'react-native-router-flux';

export const nextSyllable = () => ((dispatch, getState) => {
  return setTimeout(() => {
    dispatch({type: 'NEXT_SYLLABLE'});
  }, 5000);
});
