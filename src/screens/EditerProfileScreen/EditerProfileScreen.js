import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { ColorsContext } from '../../contexts/ColorsContext';

// Pour accéder à la donnée stockée dans le context, on doit:
// 1- l'importer
// 2- appeler le hook useContext en lui passant notre context pour récupérer
// "l'état" qui y est mis, on dira la valeur stockée

const EditerProfileScreen = (props) => {
    const { colorState } = useContext(ColorsContext);
    const rgbColor = `rgb(${colorState.red},${colorState.green},${colorState.blue})`;
    return (
        <SafeAreaView
            style={{
                ...styles.container,
                backgroundColor: rgbColor
            }}
        >
            <Text>Editeur de profile</Text>
            <View>{<Button title="Retour au welcome" onPress={() => props.navigation.navigate('Welcome')} />}</View>
            <View>
                <Text>Ceci un screen de démo</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        marginTop: 28,
        backgroundColor: '#fff'
    }
});

export default EditerProfileScreen;
