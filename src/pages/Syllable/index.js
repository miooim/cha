import SyllableComponent from './Syllable';
import {connect} from 'react-redux';
import {
  getNav, 
  getSyllable,
  getTts,
  getStt
} from '../../reducers';

import {
  getRandomSyllable, 
  ttsSpeak, 
  ttsStop,
  sttStart,
  sttSubscribe,
  sttSetup,
  sttClear,
  sttStop,
  sttDestroy,
  sttCancel
} from '../../actions';

const mapStateToProps = (state, props) => {
  return {
    ...getNav(state),
    ...getTts(state),
    ...getStt(state),
    ...getSyllable(state)
  }
};

const mapDispatchToProps = {
  getRandomSyllable,
  ttsSpeak,
  ttsStop,
  sttStart,
  sttSubscribe,
  sttSetup,
  sttClear,
  sttStop,
  sttDestroy,
  sttCancel
};

export const Syllable = connect(mapStateToProps, mapDispatchToProps)(SyllableComponent);