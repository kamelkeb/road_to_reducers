import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//on importe les trucs nécessaires à la navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//on importe nos écrans
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ColorsScreen from './src/screens/ColorsScreen/ColorsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

// On crée notre container
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: ({ focused, color, size }) => {
                        let titre;

                        if (route.name === 'Welcome') {
                            titre = focused ? 'Bienvenue' : 'Voir bienvenue';
                        } else if (route.name === 'Colors') {
                            titre = 'Jeu de couleurs';
                        } else if (route.name === 'Profile') {
                            titre = 'Mon Profile';
                        }

                        // On peut retourner n'importe quel composant ici:
                        return <Text style={{ color: color }}>{titre}</Text>;
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen name="Welcome" component={WelcomeScreen} />
                <Tab.Screen name="Colors" component={ColorsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
