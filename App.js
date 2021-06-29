import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './database';


export default class App extends React.Component {
  getWord = (word) => {
  var searchKeyWord = word.toLowerCase();
  
        var word1 = dictionary[searchKeyWord]["word"]
        var definition = dictionary[searchKeyWord]["definition"]
        var lexicalCategory =dictionary[searchKeyWord]["lexicalCategory"]

 if (word1) {
        this.setState({
          "word":word1,
         "definition":definition,
         "lexicalCategory":lexicalCategory
        })
      }
      else
      {
        this.setState({
          "word":this.state.text,
          "definition":"Not Found",
          "lexicalCategory":"None"
        })
      }
 
};
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.header}>Dictionary App</Text>
        
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({
              displayText: this.state.text,
              isSearchPressed: true,
            });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>

        <Text style={styles.detailsTitle}>
      Word:{""}
      </Text>
      <Text style={{fontSize:22,marginLeft:10,color:"blue"}}>
      {this.state.word}
      </Text>

       <Text style={styles.detailsTitle}>
      Type:{""}
      </Text>
      <Text style={{fontSize:22,marginLeft:10,color:"blue"}}>
      {this.state.lexicalCategory}
      </Text>

       <Text style={styles.detailsTitle}>
      Definition:{""}
      </Text>
      <Text style={{fontSize:22,marginLeft:10,color:"blue"}}>
      {this.state.definition}
      </Text>
      </View>

     
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  inputBox: {
    marginTop: 100,
    width: '80%',
    textAlign: 'center',
    height: 40,
    alignSelf: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    marginTop: -15,
    textAlign: 'center',
    alignSelf: 'center',
  
  
  },
  buttonText: {
    marginTop: 30,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize:25,
    color:"black"
  },

  detailsTitle:{
   
    color:'black',
    fontSize:20,
 
  },

  header:{
      backgroundColor:"grey",
      alignSelf:"center",
      padding:20,
      margin:10,
      color:"white",
      fontSize:20
  }
});




