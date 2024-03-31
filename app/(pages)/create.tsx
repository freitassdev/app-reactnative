import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

import logo from '@/assets/images/logo.png';
import bg from '@/assets/images/background.png';

import { Dropdown } from 'react-native-element-dropdown';
import { Text, View, Image, TextInput, Pressable } from '@/components/Themed';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const curses = [
  { label: 'Desenvolvimento de Sistemas', value: 'ds' },
  { label: 'Eletrônica', value: 'je' },
  { label: 'Logística', value: 'jl' },
  { label: 'Segurança do Trabalho', value: 'st' },
  { label: 'Administração', value: 'adm' },
];

export default function CreateAccountPage() {
  const [rm, setRm] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [curso, setCurso] = useState<string>('');

  const renderItem = (item: {
    label: string;
    value: string;
  }, selected?: boolean | undefined) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === curso && (
          <Ionicons name="checkbox-outline" size={24} color="white" />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.returnButton}>
          <Link href="/">
            <EvilIcons size={52} name="chevron-left" color="white" />
          </Link>
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

          <TextInput value={email} onChangeText={(text) => setEmail(text)}
            placeholder='Email Institucional' />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            activeColor='#07346c'
            iconStyle={styles.iconStyle}
            containerStyle={styles.dropContainer}
            itemContainerStyle={styles.itemContainerStyle}
            fontFamily='Quicksand-Regular'
            data={curses}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Selecione seu Curso"
            value={curso}
            onChange={item => {
              setCurso(item.value);
            }}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Link href="/internal/" asChild>
            <Pressable title="Criar Conta" style={{
              width: '100%',
            }} />
          </Link>
          <Text>Já possui uma conta?</Text>
          <Link href="/"><Text style={{ color: "#00BFFE" }}>Entre agora!</Text></Link>
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
  },

  dropdown: {
    width: "100%",
    height: 50,
    backgroundColor: '#082245',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    color: 'white',
  },
  dropContainer: {
    borderRadius: 10,
    backgroundColor: "#082245",
    borderColor: '#082245',
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#082245",
    // borderColor: '#082245',
    borderRadius: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
  },
  textItem: {
    flex: 1,
    fontSize: 15,
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 15,
    color: 'white',
  },
  selectedTextStyle: {
    fontFamily: 'Quicksand-Regular',
    color: "white",
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },

  itemContainerStyle: {
    backgroundColor: "#082245",
    borderColor: '#082245',
    borderRadius: 10,
  },
});