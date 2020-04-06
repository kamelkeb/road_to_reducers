import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import BlockComponent from '../../components/Block/BlockComponent';

const EditerProfileScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Editeur de profile</Text>
            <View>{<Button title="Retour au welcome" onPress={() => props.navigation.navigate('Welcome')} />}</View>
            <View>
                <BlockComponent />
            </View>
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

export default EditerProfileScreen;
