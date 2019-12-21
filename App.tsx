/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [inputValue, setInputValue] = useState<string>();
  const awareRef = useRef<JSX.Element>();

  const onHandleInput = () => {
    // console.warn(awareRef.current);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={[styles.scrollView, {flex: 1}]}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          style={{flex: 0.5}}
          // contentContainerStyle={{flex: 1, flexGrow: 1}}
          behavior={'padding'}
          keyboardVerticalOffset={44}>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: 'cyan',
            }}
            contentContainerStyle={{
              // flex: 1,
              // height: 400,
              // flexGrow: 1,
              // justifyContent: 'space-between',
              overflow: 'scroll',
              // flexDirection: 'column',
              // justifyContent: 'center',
              // alignItems: 'flex-end',
            }}
            // innerRef={ref => (awareRef.current = ref)}
          >
            <View
              style={{
                marginTop: 30,
                marginBottom: 300,
              }}>
              <Text>please input here</Text>
              <TextInput
                style={{
                  height: 80,
                  borderColor: 'gray',
                  borderWidth: 1,
                }}
                value={inputValue}
                onChangeText={text => setInputValue(text)}
                onFocus={onHandleInput}
              />
              <Text>thanks input :)</Text>
            </View>
            <Button title="YEAHYEAH" onPress={() => {}} color="#fff" />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

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
