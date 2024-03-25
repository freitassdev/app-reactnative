import { ImageBackground, StyleSheet } from 'react-native';
import { useState, useRef } from 'react';

import logo from '@/assets/images/logo.png';
import bg from '@/assets/images/background.png';

import { Text, View, Image, TextInput, Pressable } from '@/components/Themed';
import { Link } from 'expo-router';

export default function LoginPage() {
  const [rm, setRm] = useState<string>('');
  const reference = useRef(null);
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
            }}>Juntos fortalecendo nossa comunidade</Text>
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput keyboardType='numeric'
            inputMode="numeric"
            maxLength={6}
            placeholder='Informe seu RM'
            value={rm}
            onChangeText={(text) => {
              const formattedText = text.replace(/[.-]/g, '');
              setRm(formattedText);
            }} />
          <Link href="/internal/" asChild >
            <Pressable title="Entrar" style={{
              width: '100%',
            }}></Pressable>
          </Link>
        </View>
        <View style={styles.buttonContainer}>
          <Text>Não possui uma conta?</Text>
          <Link href="/create"><Text style={{ color: "#00BFFE" }}>Crie agora!</Text></Link>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    gap: 20,
    marginTop: 20,
  },
  buttonContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 'auto',
    bottom: 80,
    width: '80%',
    gap: 5,
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    width: "80%",
    flexWrap: 'wrap',
    marginTop: 20,
  },
});