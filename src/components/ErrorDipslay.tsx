import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ErrorDisplayProps {
  error: string;
}

export const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  if (!error) return null;

  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    marginTop: 20,
    color: 'red'
  }
});
