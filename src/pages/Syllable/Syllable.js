import React, {Component} from 'react';
import {connect} from 'react-redux';
import Speech from 'react-native-tts';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

export default class Syllable extends Component {
  constructor() {
    super();

    Speech.setDefaultLanguage('en');

    this.handleTap = this.handleTap.bind(this);
    this.talk = this.talk.bind(this);

    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      syllable: {
        fontSize: 120,
        fontWeight: 'bold'
      }
    });
  }

  handleTap() {
    console.log("TAP");
    this.talk(this.props.syllable);
  };

  talk(text){
    console.log("TALKING");
    Speech
      .speak(`${text}`)
      .then((result) => { 
        console.log("TALK_RESULT", result);
      });
  };

  componentWillReceiveProps(nextProps) {
    const {syllable} = nextProps;
    this.talk(syllable);
    this.props.nextSyllable();
  };

  componentWillMount() {
    KeepAwake.activate();
  };
  
  componentWillUnmount() {
    KeepAwake.deactivate();
  };

  render () {
    const {syllable} = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => {this.handleTap()}}>
        <View style={this.styles.container}>
          <Text style={this.styles.syllable}>{syllable}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};