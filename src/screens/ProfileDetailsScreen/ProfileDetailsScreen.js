import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const ProfileDetailsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Détails de profile</Text>
            <Button title="Editer le profile" onPress={() => props.navigation.navigate('EditerProfile')} />
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

export default ProfileDetailsScreen;
