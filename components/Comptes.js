import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'

const Comptes = (navigation) => {
  return (
    <View style={styles.container}>
      <View style={styles.ListWrapper}>
        <View style={styles.ListSection}>
          <Text style={styles.ListText}>Compte</Text>
          <Icon name="chevron-right" size={20} color="grey" style={styles.textInputIcon}/>
        </View>
        <View style={styles.ligneV}></View>
        <View style={styles.ListSection}>
          <Text style={styles.ListText}>Carnet d'adresses</Text>
          <Icon name="chevron-right" size={20} color="grey" style={styles.textInputIcon}/>
        </View>
        <View style={styles.ligneV}></View>
        <View style={styles.ListSection}>
          <Text style={styles.ListText}>Configuration</Text>
          <Icon name="chevron-right" size={20} color="grey" style={styles.textInputIcon}/>
        </View>
        <View style={styles.ligneV}></View>
        <View style={styles.ListSection}>
          <Text style={styles.ListText}>recharges et factures</Text>
          <Icon name="chevron-right" size={20} color="grey" style={styles.textInputIcon}/>
        </View>
        <View style={styles.ligneV}></View>
        <View style={styles.ListSection}>
          <Text style={styles.ListText}>A propos</Text>
          <Icon name="chevron-right" size={20} color="grey" style={styles.textInputIcon}/>
        </View>
        <View style={styles.ligneV}></View>
        <View style={styles.ListSection1}>
          <Icon name="chat" size={27} color="grey" style={styles.textInputIcon}/>
          <Text style={[styles.ListText, {marginLeft: 10}]}>Chat en direct</Text> 
        </View>
      </View>
    </View>
  )
}

export default Comptes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},
ligneV: {
  height: 1,
  width: '100%',
  backgroundColor: 'grey',
  opacity: 0.3
},
ListWrapper:{
  marginHorizontal: 20,
},
ListSection: {
  paddingVertical: 14,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
},
ListSection1: {
  marginTop: 15,
  borderRadius: 10,
  paddingVertical: 14,
  paddingHorizontal: 20,
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '#e89b6b',
},
ListText: {
  paddingLeft: 2,
  fontSize: 18,
},
})