import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Header({ time, setTime, currentTime, setCurrentTime }) {
    const options = ['Pomodoro', 'Short Break', 'Long Break'];

    function clikcBtn(index) {
        let newTime;
        if (index === 0) {
            newTime = 25;
        } else if (index === 1) {
            newTime = 5;
        } else if (index === 2) {
            newTime = 15;
        }
        setTime(newTime * 60);
        setCurrentTime(index);
    }
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Header</Text> */}
            <View style={styles.row}>
                {options &&
                    options.map((item, key) => {
                        return (
                            <TouchableOpacity
                                key={key}
                                style={[
                                    styles.btn,
                                    currentTime !== key && {
                                        borderColor: 'transparent',
                                    },
                                ]}
                                onPress={() => clikcBtn(key)}
                            >
                                <Text style={styles.opcions}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: 'white',
    },
    btn: {
        margin: 5,
        padding: 5,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
    },
    row: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    opcions: {
        fontSize: 17,
    },
});
