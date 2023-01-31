import { FlatList, StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import sectionData from '../assets/data/sectionData'
import vendeurData from '../assets/data/vendeurData'
import favorisData from '../assets/data/favorisData'
<<<<<<< HEAD

=======
import Constants from 'expo-constants'
>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const Home = (navigation) => {

    const renderSection = ({ item }) => {
        return(
            <TouchableOpacity style={[styles.SetionCard, {marginLeft: item.id == 1 ? 0 : 10,}]}>
                <ImageBackground source={item.image} style={styles.SetionImage}>
                    <Text style={styles.SetionText}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
            )
        }
<<<<<<< HEAD
    const renderVendeur = ({ item }) => {
        return(
            <TouchableOpacity style={[styles.VendeurCard, {marginLeft: item.id == 1 ? 0 : 5, }]}>
                <View>
                    <ImageBackground source={item.image} style={styles.VeandeurImage}>
                        <View style={styles.livraidInWrapper}>
                            <Text style={styles.livraidIn}>{item.DelieverTime} MIN</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.vendeurDetails}>
                    <View>
                        <Text style={styles.VendeurTitle}>{item.title}</Text>
                        <View style={styles.starWrapper}>
                            <Icon name='star' size={12} style={styles.starIcon} />
                            <Text style={[styles.VendeurRating, {color: item.rating > 4 ? '#f5b325' : 'grey'}]}>{item.rating}</Text>
                        </View>
                        <Text style={styles.VendeursectionName}>{item.sectionName}, $</Text>
                    </View>
                    <View style={styles.VendeurLaivraisonWrapper}>
                        <Text style={styles.VendeurLaivraison}>Livraison: {item.livraisonPrix} DHS</Text>
                    </View>
                </View>
            </TouchableOpacity>
            )
        }
=======
        const renderVendeur = ({ item }) => {
            return(
                <TouchableOpacity style={[styles.VendeurCard, {marginLeft: item.id == 1 ? 0 : 5, }]}>
                    <View>
                        <ImageBackground source={item.image} style={styles.VeandeurImage}>
                            <View style={styles.livraidInWrapper}>
                                <Text style={styles.livraidIn}>{item.DelieverTime} MIN</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.vendeurDetails}>
                        <View>
                            <Text style={styles.VendeurTitle}>{item.title}</Text>
                            <View style={styles.starWrapper}>
                                <Icon name='star' size={12} style={styles.starIcon} />
                                <Text style={[styles.VendeurRating, {color: item.rating > 4 ? '#f5b325' : 'grey'}]}>{item.rating}</Text>
                            </View>
                            <Text style={styles.VendeursectionName}>{item.sectionName}, $</Text>
                        </View>
                        <View style={styles.VendeurLaivraisonWrapper}>
                            <Text style={styles.VendeurLaivraison}>Livraison: {item.livraisonPrix} DHS</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                )
            }
>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a
    return ( 
        <ScrollView>
            <TouchableOpacity style={styles.container}>
                <View style={styles.cardWrapper}>
                    <View style={styles.textInputwrapper}> 
                        <Icon name="search" size={22} color="grey" style={styles.textInputIcon}/>
                        <TextInput style={styles.textInput} placeholder={'Rechercher une enseifne ou un produit'}/>
                    </View>
<<<<<<< HEAD
=======

>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a
                        {/* Section*/ }
                    <FlatList 
                        data={sectionData}
                        renderItem={renderSection}
                        keyExtractor={(item) => item.id}
                        horizontal
                        />
                        {/* Vendeur*/ }
                    <View style={styles.vendeurWrapper}>
                        <Text style={styles.vendeurTitle}>Nouveaux Vendeurs</Text>
                        <FlatList 
                        data={vendeurData}
                        renderItem={renderVendeur}
                        keyExtractor={(item) => item.id}
                        horizontal
                        />
                    </View>
                </View>
                <View style={styles.ligneV}></View>
                        {/* Vos favoris*/ }
                
                <View style={styles.cardWrapper}>
                    <View style={styles.vendeurWrapper}>
                            <Text style={styles.vendeurTitle}>Vos favoris</Text>
                            <FlatList 
                            data={favorisData}
                            renderItem={renderVendeur}
                            keyExtractor={(item) => item.id}
                            horizontal
                            />
                    </View>
                </View>
                <View style={styles.ligneV}></View>
<<<<<<< HEAD
                    {/* Livraison la plus rapide */ }
=======
                    {/* Vos favoris*/ }
>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a
                
                    <View style={styles.cardWrapper}>
                    <View style={styles.vendeurWrapper}>
                            <Text style={styles.vendeurTitle}>Livraison la plus rapide</Text>
                            <FlatList 
                            data={vendeurData}
                            renderItem={renderVendeur}
                            keyExtractor={(item) => item.id}
                            horizontal
                            />
                    </View>
                </View>
<<<<<<< HEAD
                <View style={styles.ligneV}></View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Tous les vendeurs</Text>
                    </TouchableOpacity>
                </View>

=======
>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a
            </TouchableOpacity>
        </ScrollView>    
    )
}

export default Home

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
<<<<<<< HEAD
        backgroundColor: '#f2eded',
        borderWidth: 1.5,
        borderColor: '#b5afa3',
        opacity: 0.6,
=======
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#b5afa3',
        opacity: 0.4,
>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a
        borderRadius: 50,
        flexDirection: 'row',
        height: 45,
        color: 'grey',
        alignItems: 'center',
    },
    textInput:{
<<<<<<< HEAD
        fontSize: 15,
    },
    textInputIcon:{
        marginHorizontal: 10,
        color: 'grey',
=======
    },
    textInputIcon:{
        marginHorizontal: 10,
>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a
    },
    SetionCard: {
        height: 120,
        width: 100,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: "center",
        marginTop: 20,
        borderRadius: 10,
    },
    SetionImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    SetionText: {
        color: 'black',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
    },
    vendeurWrapper: {
        marginTop: 30,
    },
    vendeurTitle: {
        fontWeight: '700',
        fontSize: 22,
    },
    VendeurCard: {
        width: windowWidth * 0.7,
        height: 280,
        paddingBottom: 40,
        borderWidth:1,
        justifyContent: 'flex-end',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: 'white',
    },
    VeandeurImage: {
        width: '100%',
        height: 160,
        borderWidth:1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        overflow: 'hidden',
        borderColor: 'white',
    },
    livraidInWrapper: {
        width: 80,
        height: 35,
        marginBottom: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight: 10,
    },
    livraidIn:{
        fontSize: 14,
        fontWeight: '600',
    },
    vendeurDetails: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
    },
    VendeurTitle: {
        fontSize: 17,
        fontWeight: '500',
    },
    starWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        color: '#f5b325',
        marginRight: 5,
    },
    VendeurRating: {
        marginTop: 3,
        fontWeight: '500',
        color: 'grey',
    },
    VendeursectionName: {
        color: 'grey',
        fontSize: 12,
    },
    VendeurLaivraisonWrapper: {
        justifyContent: 'flex-end',        
        alignItems: 'flex-end',
        marginLeft: 20,
    },
    VendeurLaivraison: {
        justifyContent: 'flex-end',        
        alignItems: 'flex-end',
        fontSize: 12,
        color: 'grey',
    },
    ligneV: {
        height: 8,
        width: '100%',
        backgroundColor: 'grey',
        opacity: 0.05
<<<<<<< HEAD
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#ff5500",
        height: 45,
        width: windowWidth - 40,
        marginBottom: 20,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
=======
    }
>>>>>>> 0f17af948a57cff73b26d5de996b7a0efd889b8a
})