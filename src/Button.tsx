import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pressableContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: 'lightblue',
        borderRadius: 6,
    },
});

export const Button = ({
    children,
    onPress,
}: React.PropsWithChildren<{ onPress?: (event: GestureResponderEvent) => void }>) => {
    return (
        <Pressable onPress={onPress} style={styles.pressableContainer}>
            {children}
        </Pressable>
    );
};
