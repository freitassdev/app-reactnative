import { ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useState } from 'react';

import logo from '@/assets/images/logo.png';
import bg from '@/assets/images/background.png';

import { Text, View, Image, TextInput, Pressable } from '@/components/Themed';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get("window").width

export default function Home() {
  const [rm, setRm] = useState<string>('');
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.mainView}>

          <View style={styles.scrollViewTitle}>
            <Text style={{
              fontSize: 18
            }}>Notícias</Text>
          </View>
          <ScrollView horizontal
            decelerationRate="fast"
            alwaysBounceHorizontal={true}
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={true}
            style={{
              maxHeight: "30%",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <View key={i} style={styles.noticeContainer}>
                <View style={styles.notice}>
                  <Text style={styles.noticeTitle}>Noticia do Dia</Text>
                  <Text style={styles.noticeText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit molestias ipsum quis id fugiat praesentium dolore aspernatur reprehenderit consectetur repellendus asperiores reiciendis autem ipsa, repudiandae rem numquam sit esse?.</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
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
    paddingTop: "20%",
    width: "100%",
    height: "100%",
  },
  scrollViewTitle: {
    // marginTop: 100,
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
  noticeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: (screenWidth * 0.85),
  },
  noticeTitle: {
    color: "black",
    fontFamily: "Quicksand-SemiBold"
  },
  noticeText: {
    color: "black",
    fontFamily: "Quicksand-Medium"
  }
});