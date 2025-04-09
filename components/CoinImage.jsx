import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default function CoinImage({ result, trigger }) {
    const rotation = useRef(new Animated.Value(0)).current;
    const imageSource =
        result === 'cara' ? require('../assets/heads.png') :
            result === 'coroa' ? require('../assets/tails.png') :
                require('../assets/heads.png'); // imagem inicial padrão

    useEffect(() => {
        rotation.setValue(0);
        Animated.timing(rotation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [trigger]);

    const rotateY = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.Image
            source={imageSource}
            style={[styles.image, { transform: [{ rotateY }] }]}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});
