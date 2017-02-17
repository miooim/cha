// @flow
import {combineReducers} from 'redux';
import nav from './navigation';
import menu from './menu';
import syllable from './syllable';

export default combineReducers({nav, menu, syllable});

export const getNav = ({nav}) => nav;
export const getHome = ({menu}) => menu;
export const getSyllable = ({syllable}) => syllable;
