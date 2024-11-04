import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const detailsscreen = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city) {
      Alert.alert('Error', 'Please enter a city name');
      return;
    }

    const API_KEY = 'd78ca4a097ac2ea4ae620670c90ffa10';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setTemperature(data.main.temp);
      setError('');
    } catch (err) {
      setTemperature(null);
      setError('Invalid city name or API call failed.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter city name'
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {temperature !== null && (
        <Text style={styles.result}>
          {`Temperature in ${city}: ${temperature} °C`}
        </Text>
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  result: {
    marginTop: 20,
    fontSize: 18
  },
  error: {
    marginTop: 20,
    color: 'red'
  }
});

export default detailsscreen;
