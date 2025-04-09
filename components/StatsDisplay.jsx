import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatsDisplay({ stats }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Total de jogadas: {stats.total}</Text>
            <Text style={styles.text}>Você acertou: {stats.userWins}</Text>
            <Text style={styles.text}>App venceu: {stats.appWins}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#eee',
    },
    text: {
        fontSize: 16,
        marginVertical: 2,
    },
});
