import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacityBase,
    Platform, // Para plataformas
} from 'react-native';

import { Logs } from 'expo';
Logs.enableExpoCliLogging();

// componets
import Header from './src/components/Header';
import Timer from './src/components/Timer';

// Styles Components
import StylesText from './src/styles/StylesText';

export default function App() {
    const [isWorking, setIsWorking] = useState(false);
    const [time, setTime] = useState(25 * 60); // minutos * segs para que de los milisegundos
    const [currentTime, setCurrentTime] = useState('POMO' | 'SORT' | 'LONG'); // Variable que tiene diferenctes estados
    const color = ['#F0B27A', '#85C1E9', '#EC7063'];

    return (
        <View
            style={[styles.container, { backgroundColor: color[currentTime] }]}
        >
            <StylesText big blond>
                POMODORO
            </StylesText>
            <Header
                time={time}
                setTime={setTime}
                setCurrentTime={setCurrentTime}
                currentTime={currentTime}
            ></Header>
            <Timer
                time={time}
                setTime={setTime}
                currentTime={currentTime}
                setCurrentTime={setCurrentTime}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: Constants.statusBarHeight,
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    bg: {
        backgroundColor: 'orange',
    },
});
