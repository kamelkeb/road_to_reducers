import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const BlockComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text>Du Texte</Text>
            <Text>Du Texte</Text>
            <Text>Du Texte</Text>
            <Text>Du Texte</Text>
            <View style={{ ...styles.container, width: 200, height: 100, marginTop: 80 }}>
                <Button title="à partir d'un fils profond" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    }
});

export default BlockComponent;
