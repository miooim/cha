import React, {Component} from 'react';
import {connect} from 'react-redux';
import Speech from 'react-native-tts';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Button} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

export default class Syllable extends Component {
  constructor() {
    super();

    this.state = {
      sst: 'STOP',
      timeoutHandler: null,
      attempt: 0
    }

    Speech.setDefaultLanguage('en');

    this.handleTap = this.handleTap.bind(this);
    this.handleNextSyllableButton = this.handleNextSyllableButton.bind(this);
    this.handleNextSpeechStop = this.handleNextSpeechStop.bind(this);
    this.handleNextTalkButton = this.handleNextTalkButton.bind(this);

    this.styles = StyleSheet.create({
      container: {
        backgroundColor: 'rgba(255, 235, 59, 0.4);'
      },
      syllableContainer: {
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'rgba(76, 175, 80, 0.4);',
      },
      buttonContainer: {
        padding: 10,
        backgroundColor: 'rgba(3, 169, 244, 0.4);'
      },
      error: {
        backgroundColor: 'rgba(255, 0, 0, 1);',
        padding: 10
      },
      errorText: {
        color: 'white',
      },
      syllable: {
        textAlign: 'center',
        paddingTop: 40,
        fontSize: 120,
        fontWeight: 'bold'
      },
      buttons: {
        width: 40,
        height: 30,
        margin: 5
      }
    });
  }

  handleTap() {
    if (this.state.timeoutHandler) {
        clearTimeout(this.state.timeoutHandler);
        this.setState({timeoutHandler: null});
    }
    this.props.ttsSpeak(this.props.syllable);
    this.setState({sst: 'GO'})
  };

  handleNextSyllableButton() {
    this.props.sttClear();
    this.props.getRandomSyllable();
  }

  handleNextTalkButton() {
    if (this.props.sttStatus === 'READY') {
      this.props.sttStart('en');
    } 
  }

  handleNextSpeechStop() {
    this.props.ttsStop();
    this.props.sttStop();
    this.props.sttDestroy();
    this.props.sttCancel();
  }

  componentWillReceiveProps(nextProps) {
    console.log("NEXT_PROPS", nextProps);
    this.sttStatusManager(nextProps);
    if (this.state.sst === 'GO' && nextProps.ttsStatus === 'READY') {
      console.log("HELLO!");
      if (this.state.timeoutHandler) {
        clearTimeout(this.state.timeoutHandler);
        this.setState({timeoutHandler: null});
      }
      this.setState({sst: 'STOP'})
      this.props.sttClear();
      this.setState({timeoutHandler: setTimeout(() => {this.props.sttStart('en')}, 2000)});
    }
    if (this.state.attempt > 5) {
      this.handleNextSyllableButton();
      this.setState({attempt: 0});
    }
  };
  
  sttStatusManager(nextProps) {
    console.log("STT_STATUS", nextProps.sttStatus);
    switch (nextProps.sttStatus){
      case 'INITIAL':
        this.props.sttSetup();
        return;
      case 'ERROR':
        if (nextProps.error === 'No match') {
          this.props.sttClear();
          this.handleTap();
          this.setState({attempt: this.state.attempt + 1});
        }
        return;
      case 'READY':
        let match = 0;
        nextProps.sttResult && nextProps.sttResult.map((item) => {
          if (item.toLowerCase() === this.props.syllable.toLowerCase()) {
            match += 1;
          }
        });
        if (nextProps.sttResult && match > 0) {
          this.props.sttClear();
          this.props.getRandomSyllable();
          return;
        } 
        if (nextProps.sttResult) {
          this.props.sttClear();
          this.setState({attempt: this.state.attempt + 1});
          this.handleTap();
          return;
        }
    }
  }

  componentWillMount() {
    KeepAwake.activate();
  };

  componentWillUnmount() {
    KeepAwake.deactivate();
  };

  renderError() {
    if (this.props.error) {
      return ( 
        <View style={this.styles.error}>
          <Text style={this.styles.errorText}>{ this.props.error}</Text>
        </View>
      )
    }
    return null;
  }

  render() {
    const {
      syllable, 
      sttResult, 
      sttVolume
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => this.handleTap()}>
        <View style={this.styles.container}>
          <View style={this.styles.syllableContainer}>
            <Text style={this.styles.syllable}>{syllable}</Text>
          </View>
          <View style={this.styles.buttonContainer}>
            <Button
              onPress={() => this.handleNextSyllableButton()}
              title="Next"
              color="#841584"
              accessibilityLabel="Next syllable"/>
            <Button
              onPress={() => this.handleNextTalkButton()}
              title="Talk"
              color="#841584"
              accessibilityLabel="Next syllable"/>
            <Button
              onPress={() => this.handleNextSpeechStop()}
              title="Stop"
              color="#841584"
              accessibilityLabel="Next syllable"/>
          </View>
          <View style={this.styles.syllableContainer}>
            <Text>Volume - {sttVolume}</Text>
            <Text>Results - {sttResult && sttResult.join(", ")}</Text>
          </View>
          {this.renderError()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};