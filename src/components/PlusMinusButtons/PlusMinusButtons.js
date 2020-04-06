import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const PlusMinusButtons = ({ titre, dispatch, type }) => {
    const colorIncrement = 10;
    return (
        <View style={styles.buttonsBlock}>
            <Text style={styles.titreStyle}>{titre}</Text>
            <View style={{ flexDirection: 'row', height: 48 }}>
                <TouchableOpacity onPress={() => dispatch({ type: type, payload: -colorIncrement })}>
                    <Text style={styles.buttonStyle}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch({ type: type, payload: colorIncrement })}>
                    <Text style={styles.buttonStyle}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titreStyle: {
        fontSize: 18,
        padding: 8
    },

    buttonsBlock: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonStyle: {
        margin: 5,
        padding: 5,
        backgroundColor: 'lightblue',
        fontSize: 18,
        width: 160,
        textAlign: 'center'
    }
});

export default PlusMinusButtons;
