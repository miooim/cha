import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default(props) => {
  const {
    count,
    scene,
    incrementCount,
    decrementCount,
    incrementCountThunk,
    handleCard
  } = props;

  return (
    <View style={styles.container}>
      <Text>You are currently on {scene && scene.sceneKey}</Text>
      <Text>Count: {count}</Text>
      <Text onPress={() => incrementCount()}>Increment Count</Text>
      <Text onPress={() => incrementCountThunk()}>Increment Count Thunk</Text>
      <Text onPress={() => decrementCount()}>Decrement Count</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={() => handleCard('card')} title="Show Card 1"/>
        <Button onPress={() => handleCard('syllable')} title="Syllable"/>
      </View>
    </View>
  )
}
