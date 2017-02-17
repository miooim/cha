import MenuComponent from './Menu';
import * as actions from './actions';
import {connect} from 'react-redux';
import {getNav, getHome, getSyllable} from '../../reducers';

const mapStateToProps = (state, props) => {
  return {
    ...getNav(state),
    ...getHome(state)
  }
};

const mapDispatchToProps = {
  ...actions
};

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
