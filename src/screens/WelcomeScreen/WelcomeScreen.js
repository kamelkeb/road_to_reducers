import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const WelcomeScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Welcome Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexWrap: 'wrap',
        marginTop: 60,
        backgroundColor: '#fff'
    }
});

export default WelcomeScreen;
