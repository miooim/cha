import SyllableComponent from './Syllable';
import {connect} from 'react-redux';
import {getNav, getSyllable} from '../../reducers';

import * as actions from './actions';

const mapStateToProps = (state, props) => {
  return {
    ...getNav(state),
    ...getSyllable(state)
  }
};

const mapDispatchToProps = {
  ...actions
};

export const Syllable = connect(mapStateToProps, mapDispatchToProps)(SyllableComponent);