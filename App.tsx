/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import GoalItem from './components/GoalItem';



function App(): JSX.Element {
  const [enterGoalText, setEnterGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText: React.SetStateAction<string>) => {
    setEnterGoalText(enteredText);
  }

  const addGoalHandler = () => {

    setCourseGoals([...courseGoals,{text:enterGoalText}]);
    // setEnterGoalText('');
  }


  // const renderItem = (item) => {
  

  //   return (
  //     <Text  style={styles.listItem}>{item}</Text>
  //   );
  // };
  return (
    <SafeAreaView>

      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Your cource goal !" style={styles.textInput} onChangeText={goalInputHandler} value={enterGoalText} />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalsContainer}>
          <Text>List of goals...</Text>
          <FlatList
          // keyExtractor={(item,index) =>{
          //   return 
          // }} 
            alwaysBounceVertical 
            data={courseGoals} 
            renderItem={(itemData) =>{
            itemData.index
            return(
             <GoalItem text={itemData?.item?.text}/>
            )
          }} />
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '75%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    // flex:3
  },
  listItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#5e5e5e'

  }
})

export default App;
