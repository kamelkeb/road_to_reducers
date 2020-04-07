import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ProfileForm = ({ onSubmit }) => {
    const [ lastName, setLastName ] = useState('');
    const [ firstName, setFirstName ] = useState('');

    return (
        <View>
            <Text style={styles.label}>Saisir le nom:</Text>
            <TextInput style={styles.input} value={lastName} onChangeText={(text) => setLastName(text)} />
            <Text style={styles.label}>Saisir le prénom:</Text>
            <TextInput style={styles.input} value={firstName} onChangeText={(text) => setFirstName(text)} />
            <Button title="Sauvegarder" onPress={() => onSubmit(title, content)} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default ProfileForm;
