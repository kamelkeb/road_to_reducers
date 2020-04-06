import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const ColorsScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Colors Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexWrap: 'wrap',
        marginTop: 60,
        backgroundColor: '#fff'
    },
    myDiv: {
        height: 60,
        width: 60,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'grey',
        margin: 15
    }
});

export default ColorsScreen;
