import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation Tabs
import NavigationTabs from './src/navigation/BottomTab/NavigationTabs';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>App</Text>
            <View style={styles.cont2}>
                <Text>
                    container2 jfhkjdshfkjhdfjkhfdsjkhjksdhfjhjksfhdjkhfjsdkhjk
                </Text>
                <NavigationTabs />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    cont2: {
        flex: 0.5,
        borderWidth: 5,
    },
});
