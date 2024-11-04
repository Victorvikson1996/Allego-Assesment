import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface WeatherDisplayProps {
  city: string;
  temperature: number | null;
}

export const DisplayCard = ({ city, temperature }: WeatherDisplayProps) => {
  if (temperature === null) return null;

  return (
    <Text style={styles.result}>
      {`Temperature in ${city}: ${temperature} °C`}
    </Text>
  );
};

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    fontSize: 18
  }
});
