import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
    parternName: string;
    parternDesc: string;
    image: any;
}

const JobsPartern: React.FC<Props> = ({ parternDesc, parternName, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.logo} />
            <View style={styles.textsContainer}>
                <Text style={styles.parternDesc}>{parternDesc}</Text>
                <Text style={styles.parternName}>{parternName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        gap: 15
    },
    textsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    logo: {
        width: 110,
        height: 110,
    },
    parternName: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    parternDesc: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        width: '80%',
        fontSize: 15,
        marginTop: 5,
    }
});

export default JobsPartern;