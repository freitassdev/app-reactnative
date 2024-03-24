import { ImageBackground, StyleSheet } from 'react-native';
import { useState } from 'react';

import logo from '@/assets/images/logo.png';
import bg from '@/assets/images/background.png';

import { Text, View, Image, TextInput, Pressable } from '@/components/Themed';
import { Link } from 'expo-router';

export default function FoodMenu() {

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.image} />
          <View style={styles.subtitle}>
            <Text style={{
              fontSize: 18,
              color: 'white',
              fontFamily: 'Quicksand-SemiBold',
              textAlign: "center",
            }}>Food menu</Text>
          </View>
        </View>
       
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  logoContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -170,
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    width: "80%",
    flexWrap: 'wrap',
    marginTop: 20,
  },
});