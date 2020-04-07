import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//on importe les trucs nécessaires à la navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//on importe nos écrans
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ColorsScreen, { ColorsProvider } from './src/screens/ColorsScreen/ColorsScreen';
import ProfileStack from './src/screens/ProfileScreen/ProfileStack';
// import librairie de pesistance de donnée
// import AsyncStorage from '@react-native-community/async-storage';

// On crée notrenavigator
const Tab = createBottomTabNavigator();

const App = () => {
    const [ asyncStorageSetError, setAsyncStorageSetError ] = useState('');
    const [ asyncStorageGetError, setAsyncStorageGetError ] = useState('');
    const [ userInfo, setUserInfo ] = useState('');
    // Fonction storeUserInfo utilise AsyncStorage.setItem pour sauvegarder
    // une paire clé valeur
    /*  const storeUserInfo = async () => {
        try {
            await AsyncStorage.setItem('userInfo', 'Kamel');
        } catch (e) {
            setAsyncStorageSetError(e);
        }
    };

    const getUserInfo = async () => {
        try {
            const existingUserInfo = await AsyncStorage.getItem('userInfo');
            if (existingUserInfo !== null) {
                setUserInfo(existingUserInfo);
            } else {
                setUserInfo('anon');
            }
        } catch (e) {
            setAsyncStorageGetError(e);
        }
    }; */

    // Wrapper le tout avec le Provider pour rendre le contexte accessible partout
    return (
        <ColorsProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarLabel: ({ focused, color }) => {
                            let titre;
                            if (route.name === 'Welcome') {
                                titre = focused ? 'Bienvenue' : `Clique ici!`;
                            } else if (route.name === 'Colors') {
                                titre = 'Couleurs';
                            } else if (route.name === 'Profile') {
                                titre = 'Mon Profile';
                            }
                            // On peut retourner n'importe quel composant ici:
                            return <Text style={{ color: color, margin: 12, fontSize: 18 }}>{titre}</Text>;
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray'
                    }}
                >
                    <Tab.Screen name="Welcome" component={WelcomeScreen} />
                    <Tab.Screen name="Colors" component={ColorsScreen} />
                    <Tab.Screen name="Profile" component={ProfileStack} />
                </Tab.Navigator>
            </NavigationContainer>
        </ColorsProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default App;
