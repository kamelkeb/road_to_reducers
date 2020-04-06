import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const premierReducer = (state, action) => {
    switch (action.type) {
        case 'affectRed':
            return { ...state, red: state.red + action.payload };
        case 'affetBlue':
            return { ...state, blue: state.blue + action.payload };
        case 'affectGreen':
            return { ...state, green: state.green + action.payload };
        case 'assombrir':
            return {
                green: state.green - action.payload,
                blue: state.blue - action.payload,
                red: state.red - action.payload
            };

        default:
            return state;
    }
};

const ColorsScreen = (props) => {
    const [ colorObject, dispatch ] = useReducer(premierReducer, { red: 0, green: 0, blue: 0 });

    const colorIncrement = 10;

    const affectNum = (colorIncrement) => (num) => Math.max((num + colorIncrement) % 256, 0);
    //const applicationPartielle = affectNum(4)
    //j'obtiendrai une fonction (colorIncrement) => Math.max(((4 +colorIncrement)%256),0)
    // applicationPartielle(10)
    //j'obtiendrai Math.max(((4 +10)%256),0)
    // et comme c'est une expression javascript qui peut être évaluée alors ce sera 14

    return (
        <SafeAreaView style={styles.container}>
            <Text>Colors Screen</Text>
            <View style={styles.buttonsBlock}>
                <Text>Rouge</Text>
                <Button
                    style={styles.buttonStyle}
                    title="Augmenter"
                    onPress={() => dispatch({ type: 'affectRed', payload: colorIncrement })}
                />
                <Button
                    style={styles.buttonStyle}
                    title="Diminuer"
                    onPress={() => dispatch({ type: 'affectRed', payload: -colorIncrement })}
                />
            </View>
            <View style={styles.buttonsBlock}>
                <Text>Vert</Text>
                <Button
                    style={styles.buttonStyle}
                    title="Augmenter"
                    onPress={() => dispatch({ type: 'affectGreen', payload: colorIncrement })}
                />
                <Button
                    style={styles.buttonStyle}
                    title="Diminuer"
                    onPress={() => dispatch({ type: 'affectGreen', payload: -colorIncrement })}
                />
            </View>
            <View style={styles.buttonsBlock}>
                <Text>Bleu</Text>
                <Button
                    style={styles.buttonStyle}
                    title="Augmenter"
                    onPress={() => dispatch({ type: 'affectBlue', payload: colorIncrement })}
                />
                <Button
                    style={styles.buttonStyle}
                    title="Diminuer"
                    onPress={() => dispatch({ type: 'affectRed', payload: -colorIncrement })}
                />
            </View>
            <View
                style={{
                    ...styles.myDiv,
                    backgroundColor: `rgb(${colorObject.red},${colorObject.green},${colorObject.blue})`,
                    alignSelf: 'flex-start',
                    width: '40%',
                    height: 90
                }}
            />
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
    buttonsBlock: {
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    },
    myDiv: {
        height: 60,
        width: 60,
        borderWidth: 1,
        backgroundColor: 'grey',
        margin: 15
    },
    buttonStyle: {
        height: 20,
        margin: 10,
        padding: 5
    }
});

export default ColorsScreen;
