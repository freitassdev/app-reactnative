import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';

interface Props {
    // Definir as props aqui
}
const screenWidth = Dimensions.get("window").width
const GeralNotice: React.FC<Props> = ({ }) => {
    return (
        <View style={styles.noticeContainer}>
            <ImageBackground style={styles.notice} 
            source={{ uri: 'https://media.discordapp.net/attachments/1122234389867286640/1223742909896196146/9k.png?ex=661af665&is=66088165&hm=43eb177a1b5d6c33d7de85cdafe8f4c490ed371639b734cc5041003cbf8ee80d&=&format=webp&quality=lossless&width=343&height=228' }}
            imageStyle={styles.imageStyle}>
                <Text style={styles.noticeTitle}>Acidente causa 4km de engarrafamento</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    noticeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notice: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        width: (screenWidth * 0.85),
        height: 170,
    },
    noticeTitle: {
        fontFamily: "Tinos-Bold",
        color: "#FFFFFF",
        fontSize:18
    },
    imageStyle: {
        borderRadius: 10,
    },
});

export default GeralNotice;