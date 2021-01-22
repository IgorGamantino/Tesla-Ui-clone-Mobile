import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';
import SolarList from './components/SolarList';
import AcessoriesList from './components/AcessoriesList';

export default function App() {
  return (
   <>
      <ScrollView style={styles.container}>
         <Header />
        <SolarList />
        <CarsList />
        
        <AcessoriesList />
        <StatusBar style="auto" />
      </ScrollView>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
