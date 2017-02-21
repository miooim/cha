// @flow
import {combineReducers} from 'redux';
import nav from './navigation';
import menu from './menu';
import syllable from './syllable';
import tts from './tts';
import stt from './stt';

export default combineReducers({
    nav,
    menu,
    syllable,
    tts,
    stt
});

export const getNav = ({nav}) => nav;
export const getHome = ({menu}) => menu;
export const getSyllable = ({syllable}) => syllable;
export const getTts = ({tts}) => tts;
export const getStt = ({stt}) => stt;
