



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';


import {
  Header,
  Features,
  Colors,
  EventPage,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component<{}> {
  static navigationOptions = {
    title: 'AppMenu',
  };
  FunctionToOpenSecondActivity = () => {
     this.props.navigation.navigate('AppMenu');
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Main Menu"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          
          <Header />
          
          <EventPage />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>

            <View style={styles.sectionContainer}>
              <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Event Page'/>
              <Text style={styles.sectionTitle}>ChampLink</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Version: </Text> 0.1 {'\n'}
                <Text style={{fontWeight: "bold"}}>Date:</Text> October 15, 2019{'\n'}
                <Text style={{fontWeight: "bold"}}>Authors:</Text> Brian Nguyen {"&"} Matthew Schwartzkopf
              </Text>

            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>What is ChampLink ?</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>

              </Text>
            </View>
            <LearnMoreLinks/>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    )
          }
        }
        
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;