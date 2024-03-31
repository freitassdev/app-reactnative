import { ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useState } from 'react';

import bg from '@/assets/images/background.png';
import nube from '@/assets/images/parterns/nube.png';
import ciee from '@/assets/images/parterns/ciee.png';
import leapy from '@/assets/images/parterns/leapy.png';

import { Text, View, Image, TextInput, Pressable } from '@/components/Themed';
import { Link } from 'expo-router';
import GeralNotice from '@/components/shared/notices/geralNotice';
import ClassNotice from '@/components/shared/notices/classNotice';
import JobsPartern from '@/components/shared/jobsParterns';

const screenWidth = Dimensions.get("window").width

export default function Home() {
  const [rm, setRm] = useState<string>('');
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={bg} style={styles.background} >
        <View style={styles.mainView}>
          <View style={styles.sectionTitle}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>Notícias Gerais</Text>
            <View style={styles.divisor}></View>
          </View>
          <ScrollView horizontal
            decelerationRate="fast"
            alwaysBounceHorizontal={true}
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            style={{
              maxHeight: "30%",
              marginTop: 20,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <GeralNotice key={i} />
            ))}
          </ScrollView>

          
          <View style={styles.sectionTitle}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>Parceiros de Estágio</Text>
            <View style={styles.divisor}></View>
          </View>
          <View style={styles.jobsContainer}>
            <JobsPartern image={ciee} parternDesc='Quer ficar por dentro das nossas...' parternName='CIEE'/>
            <JobsPartern image={nube} parternDesc='Quer ficar por dentro de mim? 🤤...' parternName='Nube'/>
            <JobsPartern image={leapy} parternDesc='Quer ficar por dentro das nossas...' parternName='Leapy'/>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainView: {
    display: "flex",
    paddingTop: "10%",
    paddingBottom: "10%",
    width: "100%",
    height: "100%",
  },
  sectionTitle: {
    marginTop: 20,
    height: 40,
    paddingHorizontal: 25,
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    height: "100%",
    paddingHorizontal: 20,
  },
  divisor: {
    width: "100%",
    height: 2.5,
    backgroundColor: "#ffffff",
  },
  jobsContainer: {
    paddingHorizontal: 20,
  }
});