import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    // stylo base text
    text: {
        color: 'black',
        textAlign: 'center',
    },
    blond: {
        fontWeight: 'bold',
    },
    big: {
        fontSize: 30,
    },
});

export default function StylesText({ children, blond, big }) {
    const textStyles = [styles.text, blond && styles.blond, big && styles.big];
    return <Text style={textStyles}>{children}</Text>;
}
