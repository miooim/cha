import {getHome} from '../../reducers';
import {Actions} from 'react-native-router-flux';

export const incrementCount = () => ({type: 'INCREMENT'});

export const decrementCount = () => ({type: 'DECREMENT'});

export const incrementCountThunk = () => ((dispatch, getState) => {
  const {count} = getHome(getState())
  if (count < 10) {
    dispatch({type: 'INCREMENT'})
  }
});

export const handleCard = (scene) => {
  Actions[scene]({title: `Card: ${scene}`});
  // Redux require you to return an object with type.
  return {type: 'CardPush'}
};
