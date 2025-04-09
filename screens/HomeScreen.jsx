import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import CoinImage from '../components/CoinImage';
import CoinPicker from '../components/CoinPicker';
import StatsDisplay from '../components/StatsDisplay';
import { flipCoin } from '../utils/coinUtils';

export default function HomeScreen() {
    const [selectedOption, setSelectedOption] = useState('cara');
    const [currentResult, setCurrentResult] = useState(null);
    const [stats, setStats] = useState({
        total: 0,
        userWins: 0,
        appWins: 0,
    });
    const [animationTrigger, setAnimationTrigger] = useState(0);
    const [resultText, setResultText] = useState('');
    const [isFlipping, setIsFlipping] = useState(false);

    const handleToss = () => {
        if (isFlipping) return; // Evita múltiplos cliques
        setIsFlipping(true);
        setResultText('');
        const nextTrigger = animationTrigger + 1;
        setAnimationTrigger(nextTrigger);

        setTimeout(() => {
            const result = flipCoin();
            setCurrentResult(result);

            const userWon = result === selectedOption;

            setStats(prev => ({
                total: prev.total + 1,
                userWins: prev.userWins + (userWon ? 1 : 0),
                appWins: prev.appWins + (userWon ? 0 : 1),
            }));

            setResultText(
                `Deu ${result.toUpperCase()}! ${userWon ? 'Você ganhou 🎉' : 'O app venceu 😎'}`
            );
            setIsFlipping(false); // Libera o botão depois
        }, 800);
    };

    return (
        <View style={styles.container}>
            <CoinImage result={currentResult} trigger={animationTrigger} />
            <CoinPicker selected={selectedOption} onChange={setSelectedOption} />
            <Button
                title={isFlipping ? 'Girando...' : 'Sortear'}
                onPress={handleToss}
                disabled={isFlipping}
            />
            {resultText !== '' && <Text style={styles.resultText}>{resultText}</Text>}
            <StatsDisplay stats={stats} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        gap: 20,
    },
    resultText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
});
