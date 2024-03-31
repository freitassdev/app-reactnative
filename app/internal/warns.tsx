import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import bg from '@/assets/images/background.png';

import { Text, View } from '@/components/Themed';
import ClassNotice from '@/components/shared/notices/classNotice';
import GremioNotice from '@/components/shared/notices/gremioNotice';
export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background} >
        <View style={styles.mainView}>
          <View style={styles.sectionTitle}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>Avisos da Sala</Text>
            <View style={styles.divisor}></View>
          </View>
          <ScrollView
            decelerationRate="fast"
            alwaysBounceVertical={true}
            contentContainerStyle={styles.scrollView}
            style={{
              maxHeight: "27%",
            }}
          >
            <ClassNotice />
            <View style={styles.sectionTitle}>
              <View style={styles.divisor}></View>
            </View>
          </ScrollView>

          <View style={styles.sectionTitle}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
            }}>Avisos do Grêmio</Text>
            <View style={styles.divisor}></View>
          </View>
          <ScrollView
            decelerationRate="fast"
            alwaysBounceVertical={true}
            contentContainerStyle={styles.scrollView}
            style={{
              maxHeight: "50%",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <View key={i} style={{
                width: '100%'
              }}>
                <GremioNotice />
                <View style={styles.sectionTitle}>
                  <View style={styles.divisor}></View>
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
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  sectionTitle: {
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
  divisor: {
    width: "100%",
    height: 2.5,
    backgroundColor: "#ffffff",
  },
});