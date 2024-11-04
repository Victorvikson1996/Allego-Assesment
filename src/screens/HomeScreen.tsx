import React, { useState } from 'react';
import { StyleSheet, Text, Alert, SafeAreaView } from 'react-native';
import { Button, InputField } from '../components';
import { DisplayCard } from '../components/DisplayCard';
import { ErrorDisplay } from '../components/ErrorDipslay';

export const HomeScreen = () => {
  const [city, setCity] = useState<string>('');
  const [temperature, setTemperature] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [data, setDdata] = useState<string>('');
  const [loading, setLoading] = useState<string>('');

  const API_KEY = 'd78ca4a097ac2ea4ae620670c90ffa10';
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const fetchWeather = async () => {
    if (!city) {
      Alert.alert('city not found');
      return;
    }

    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
      setTemperature(data.main.temp);
      setError('');
    } catch (error) {
      setTemperature(null);
      setError('Error getting City input right city');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Allego Weather App</Text>
      <InputField
        placeholder='Enter city name'
        value={city}
        onChangeText={setCity}
      />
      <Button onPress={fetchWeather} title='Get Weather' />
      <DisplayCard city={city} temperature={temperature} />
      <ErrorDisplay error={error} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
