import React, {Component} from 'react';
import {connect} from 'react-redux';
import Speech from 'react-native-tts';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Button} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

export default class Syllable extends Component {
  constructor() {
    super();

    Speech.setDefaultLanguage('en');

    this.handleTap = this.handleTap.bind(this);
    this.handleNextSyllableButton = this.handleNextSyllableButton.bind(this);
    this.handleNextSpeechStop = this.handleNextSpeechStop.bind(this);
    this.handleNextTalkButton = this.handleNextTalkButton.bind(this);

    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
      syllableContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      syllable: {
        paddingTop: 40,
        fontSize: 120,
        fontWeight: 'bold'
      },
      buttons: {
        width: 40,
        height: 30
      }
    });
  }

  handleTap() {
    this.props.speechSpeak(this.props.syllable);
  };

  handleNextSyllableButton() {
    this.props.nextSyllable();
  }

  handleNextTalkButton() {
    if (Platform.OS === 'android') {
      STTandroid.showGoogleInputDialog()
          .then((result) => {
              console.log(result)
          })
          .catch((error) => {
              console.log(error)
          })
    
    } 
  }

  handleNextSpeechStop() {
    this.props.speechStop();
  }
  componentWillReceiveProps(nextProps) {};

  componentWillMount() {
    KeepAwake.activate();
  };

  componentWillUnmount() {
    KeepAwake.deactivate();
  };

  render() {
    const {syllable} = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => this.handleTap()}>
        <View style={this.styles.container}>
          <View style={this.styles.syllableContainer}>
            <Text style={this.styles.syllable}>{syllable}</Text>
          </View>
          <View style={this.styles.buttonContainer}>
            <Button onPress={() => this.handleNextSyllableButton()}
              title="Next"
              color="#841584"
              accessibilityLabel="Next syllable"/>
            <Button onPress={() => this.handleNextTalkButton()}
              title="Talk"
              color="#841584"
              accessibilityLabel="Next syllable"/>
            <Button onPress={() => this.handleNextSpeechStop()}
              title="Stop"
              color="#841584"
              accessibilityLabel="Next syllable"/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};