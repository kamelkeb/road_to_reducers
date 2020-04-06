import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileDetailsScreen from '../ProfileDetailsScreen/ProfileDetailsScreen';
import EditerProfileScreen from '../EditerProfileScreen/EditerProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileScreen = (props) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Principale" options={{ title: 'Mon profile' }}>
                {(props) => (
                    <SafeAreaView style={styles.container}>
                        <Text>Profile Screen</Text>
                        <Button title="Voir les détails" onPress={() => props.navigation.navigate('Details')} />
                    </SafeAreaView>
                )}
            </ProfileStack.Screen>
            <ProfileStack.Screen name="Details" component={ProfileDetailsScreen} options={{ title: 'Détails' }} />
            <ProfileStack.Screen
                name="EditerProfile"
                component={EditerProfileScreen}
                options={{ title: 'Editer le profile' }}
            />
        </ProfileStack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexWrap: 'wrap',

        backgroundColor: '#fff'
    }
});

export default ProfileScreen;
