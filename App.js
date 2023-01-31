import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chercher from './components/Chercher';
import Commandes from './components/Commandes';
import Comptes from './components/Comptes';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Maison') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Chercher') {
              iconName = focused ? 'search' : 'search-outline';
            }else if (route.name === 'Commandes') {
              iconName = focused ? 'md-list-circle' : 'md-list-circle-outline';
            }else if (route.name === 'Compte') {
              iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff5500',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Maison" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Chercher" component={Chercher} options={({  }) => ({
          
          // Add a placeholder button without the `onPress` to avoid flicker
          
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 20,}}>
              <Icon name={'ios-arrow-back-sharp'} size={30} />
            </TouchableOpacity>
          ),
          title: 'Chercher',
          headerTitleAlign: 'center'
          
        })}/>
        <Tab.Screen name="Commandes" component={Commandes} options={({  }) => ({
          
          // Add a placeholder button without the `onPress` to avoid flicker
          
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 20,}}>
              <Icon name={'ios-arrow-back-sharp'} size={30} />
            </TouchableOpacity>
          ),
          title: 'Commandes',
          headerTitleAlign: 'center'
          
        })}/>
        <Tab.Screen name="Compte" component={Comptes} options={({  }) => ({
          
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 20,}}>
              <Text style={{color: '#f5b325', fontSize: 17,}}>Déconnexion</Text> 
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 20,}}>
              <Icon name={'ios-arrow-back-sharp'} size={30} />
            </TouchableOpacity>
          ),
          title: 'Compte',
          headerTitleAlign: 'center'
          
        })}
          />
      </Tab.Navigator>
  )
}

export default function App() {

  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Commandes"
            component={Commandes}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight,
        marginBottom: 10,
  },
});
