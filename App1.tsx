/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  var width = Dimensions.get('window').width;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 4' },
    { title: 'Item 5' },
    // Add more items as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

const handleScroll = () =>{
  console.log('ashish');
  
}

const handlePrevious  = () =>{
  console.log('handle Previous');
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
    console.log(currentIndex);
  }
  
}

const handleNext = () =>{
  console.log('handle Next');
  if (currentIndex < data.length - 1) {
    setCurrentIndex(currentIndex + 1);
    console.log(currentIndex);
    
  }
  
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        >
          {data.map((item, index) => (
            <View key={index} style={[styles.aa, { width: width }]}>
              <Text>{item.title}</Text>
            </View>
          ))}

        </ScrollView>
      </View>
      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>
      <View style={styles.controls}>
      <TouchableOpacity onPress={handlePrevious} disabled={currentIndex === 0}>
          <Text style={styles.controlText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} disabled={currentIndex === data.length - 1}>
          <Text style={styles.controlText}>Next</Text>
        </TouchableOpacity>
      </View>


      {/* <ScrollView
      horizontal={true}
    >
      <View style={styles.testView}>
      <Text>as</Text>
      </View>
      <View style={styles.testView}>
      <Text>as</Text>
      </View>
    </ScrollView> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    //flex: 1,
  },
  aa: {
    // height:400,
    backgroundColor: 'green',
    //width:400
  },
  // testView:{
  //   height:300,
  //   backgroundColor: 'powderblue',
  //   flex:1,
  //   padding: 20,
  // }

  carouselContainer: {
    height: 300
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  controls:{
    justifyContent:'space-between',
    display:'flex',
    alignContent:'space-between',
    flexDirection: 'row',
  },
  controlText:{
    padding: 12,
    backgroundColor:'red'
  }
});

export default App;
