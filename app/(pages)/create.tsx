import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

import logo from '@/assets/images/logo.png';
import bg from '@/assets/images/background.png';

import { Text, View, Image, TextInput, Pressable } from '@/components/Themed';
import { EvilIcons } from '@expo/vector-icons';

export default function CreateAccountPage() {
  const [rm, setRm] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [curso, setCurso] = useState<string>('');
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.returnButton}>
          <EvilIcons size={52} name="chevron-left" color="white" />
        </View>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.inputsContainer}>
          <TextInput keyboardType='numeric'
            inputMode="numeric"
            maxLength={5}
            placeholder='Informe seu RM'
            value={rm}
            onChangeText={(text) => {
              const formattedText = text.replace(/[.-]/g, '');
              setRm(formattedText);
            }} />
          <TextInput placeholder='Email Institucional' />
          <TextInput placeholder='Selecione seu Curso' />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable title="Criar Conta" style={{
            width: '100%',
          }}></Pressable>
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
  returnButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 'auto',
    bottom: 80,
    width: '80%',
  }
});