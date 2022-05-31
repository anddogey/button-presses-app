import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './Button';

const styles = StyleSheet.create({
    homescreenContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
});

export const App = () => {
    const [numberOfPresses, setNumberOfPresses] = useState(0);
    const increaseNumberOfPresses = useCallback(() => {
        setNumberOfPresses(numberOfPresses + 1);
        axios.put('http://192.168.1.243:3000/buttons/123', { numberOfPresses: numberOfPresses + 1 });
    }, [numberOfPresses]);
    useEffect(() => {
        axios.get('http://192.168.1.243:3000/buttons/123').then((response) => {
            setNumberOfPresses(response.data);
        });
    });
    return (
        <View style={styles.homescreenContainer}>
            <Text>Number of Presses: {numberOfPresses}</Text>
            <Button onPress={increaseNumberOfPresses}>
                <Text>Press me!</Text>
            </Button>
        </View>
    );
};
