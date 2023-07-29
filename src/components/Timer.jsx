import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import audioClik from '../assets/audio/pick-92276.mp3';

export default function Timer({ time, setTime, currentTime, setCurrentTime }) {
    const [btnIsActive, setBtnIsActive] = useState(false);

    const formatedTime = `${Math.floor(time / 60)
        .toString()
        .padStart(2, '0')}:${Math.floor(time % 60)
        .toString()
        .padStart(2, '0')}`;

    async function playSounds() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audio/pick-92276.mp3')
        );
        await sound.playAsync();
    }

    useEffect(() => {
        let interval = null;
        if (btnIsActive) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        // resetear valores
        if (time === 0) {
            setTime(() => {
                if (currentTime === 0) {
                    return 25 * 60;
                } else if (currentTime === 1) {
                    return 5 * 60;
                } else {
                    return 15 * 60;
                }
            });
            setBtnIsActive(false);
        }
        // limpiamos intervaos al desmontar el componente
        return () => clearInterval(interval);
    }, [btnIsActive, time]);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>{formatedTime}</Text>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    playSounds();
                    setBtnIsActive(!btnIsActive);
                }}
            >
                <Text style={styles.whiteText}>
                    {btnIsActive ? 'PAUSE' : 'START'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // borderWidth: 2,
        // height: 100,
        borderRadius: 10,
        margin: 20,
        padding: 10,
        flex: 0.23,
    },
    text: {
        fontSize: 90,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn: {
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: 'black',
        marginVertical: 10,
        marginHorizontal: 50,
    },
    whiteText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
});
