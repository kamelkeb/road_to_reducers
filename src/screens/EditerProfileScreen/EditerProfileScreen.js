import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import BlockComponent from '../../components/Block/BlockComponent';
import { ColorsContext } from '../ColorsScreen/ColorsScreen';

// Pour accéder à la donnée stockée dans le context, on doit:
// 1- l'importer
// 2- appeler le hook useContext en lui passant notre context pour récupérer
// "l'état" qui y est mis, on dira la valeur stockée

const EditerProfileScreen = (props) => {
    const contextValue = useContext(ColorsContext);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Editeur de profile</Text>
            <View>{<Button title="Retour au welcome" onPress={() => props.navigation.navigate('Welcome')} />}</View>
            <View>
                <Text>{contextValue}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    }
});

export default EditerProfileScreen;
