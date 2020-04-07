import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Context as ColorsContext } from '../../contexts/ColorsContext';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

// Pour accéder à la donnée stockée dans le context, on doit:
// 1- l'importer
// 2- appeler le hook useContext en lui passant notre context pour récupérer
// "l'état" qui y est mis, on dira la valeur stockée

const EditerProfileScreen = (props) => {
    const { state } = useContext(ColorsContext);
    const rgbColor = `rgb(${state.red},${state.green},${state.blue})`;
    return (
        <SafeAreaView
            style={{
                ...styles.container,
                backgroundColor: rgbColor
            }}
        >
            <Text>Editeur de profile</Text>
            <ProfileForm />
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
