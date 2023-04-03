import React from "react";
import { FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
  item:{
    padding:10,
    fontSize:18,
    height:44,
  }
})

const FlatListBasic = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Yohan'},
          {key: 'Matt'},
          {key: 'Riz'},
          {key: 'Timothy'},
          {key: 'Fany'},
        ]}
        renderItem={({item}) => 
          <Text style={styles.item}>
            {item.key}
          </Text>
        }
        />
    </View>
  );
}

export default FlatListBasic;


// import React from "react";
// import { Image, ScrollView, Text} from 'react-native';

// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width : 64,
//   height : 64,
// }

// const App = () =>(
//   <ScrollView>
//     <Text style={{fontSize:96}}>Scroll plzz</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize:96}}>Again, perhaps ?</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize:96}}>Scrolling down</Text>
//   </ScrollView>
// );

// export default App;

// import React , {Component} from 'react';
// import {Button, Image, Text, View} from 'react-native';

// interface CatProps {
//   name: string;
// }

// class Cat extends Component<CatProps>{
//   state = {isHungry : true};

//   render(){
//     return(
//       <View>
//         <Text>
//           I am {this.props.name}, and I'am {this.state.isHungry? 'Hungry' : 'Full'}
//         </Text>
//         <Button
//          onPress={()=>{
//           this.setState({isHungry:false});
//          }}
//          disabled={!this.state.isHungry}
//          title={
//           this.state.isHungry ? 'Pour me some milk, please' : 'Thank you!'
//          }
//          />
//       </View>
//     );
//   }
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Cat name="Maru" />
//       <Cat name="Jiro" />
//     </View>
//   );
// };

// export default Cafe;

// import React, {useState} from 'react';
// import {Text, TextInput, View} from 'react-native';

// const PizzaTranslator = () => {
//   const [text, setText] = useState('');
//   return (
//     <View style={{padding:10}}>
//       <TextInput
//         style={{height:40}}
//         placeholder='Type to translate into pizza language'
//         onChangeText={newText => setText(newText)}
//         defaultValue={text}
//       />
//       <Text style={{padding:10, fontSize:42}}>
//         {
//           text.split(' ').map(word=>word && '🍕').join(' ')
//         }
//       </Text>
//     </View>
//   );
// }

// export default PizzaTranslator;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;