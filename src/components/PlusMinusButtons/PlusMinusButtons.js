import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const PlusMinusButtons = ({ color, colorHandler }) => {
    const colorIncrement = 10;
    return (
        <View style={styles.buttonsBlock}>
            <Text style={styles.titreStyle}>{color}</Text>
            <View style={{ flexDirection: 'row', height: 48 }}>
                <TouchableOpacity onPress={() => colorHandler(-colorIncrement)}>
                    <Text style={styles.buttonStyle}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => colorHandler(colorIncrement)}>
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
