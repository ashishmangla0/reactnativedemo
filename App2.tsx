/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={[styles.appContainer,styles.rowreverse]}>
        <View style={[styles.box, styles.boxred]}><Text>1</Text></View>
        <View style={[styles.box,styles.boxgreen]}><Text>2</Text></View>
        <View style={[styles.box,styles.boxblue]}><Text>3</Text></View>



      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  row:{
    flexDirection:'row'
  },
  rowreverse:{
    flexDirection:'row-reverse'
  },
  box: {
    width: 100,
    height: 100,
   
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxred:{
    backgroundColor: 'red',
  },
  boxgreen:{
    backgroundColor: 'green'
  },
  boxblue:{
    backgroundColor: 'blue'
  }
})

export default App;


