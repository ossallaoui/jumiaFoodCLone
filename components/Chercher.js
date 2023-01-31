import { FlatList, StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Chercher = (navigation) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
          <View style={styles.textInputwrapper}> 
              <Icon name="search" size={22} color="grey" style={styles.textInputIcon}/>
              <TextInput style={styles.textInput} placeholder={'Rechercher une enseigne ou un produit'}/>
          </View>
      </View>
    </View>  
  )
}

export default Chercher

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},
cardWrapper: {
    marginLeft: 20,
},
  textInputwrapper: {
    marginTop: 20,
    width: windowWidth - 40,
    backgroundColor: '#f2eded',
    borderWidth: 1.5,
    borderColor: '#b5afa3',
    opacity: 0.6,
    borderRadius: 50,
    flexDirection: 'row',
    height: 45,
    color: 'grey',
    alignItems: 'center',
    paddingLeft: 15,
},
textInputIcon: {
  marginRight: 10,
  color: 'grey',
},
textInput:{
  fontSize: 15,
}
})