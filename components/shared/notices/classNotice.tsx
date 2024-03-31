import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    // Definir as props aqui
}
const screenWidth = Dimensions.get("window").width
const ClassNotice: React.FC<Props> = ({ }) => {
    return (
        <View style={styles.noticeContainer}>
            <View style={styles.noticeUser}>
                <View style={styles.userImage}>
                    <Ionicons name="person" size={25} color="#16232f" />
                </View>
                <Text style={styles.noticeUserText}>Nome do Professor</Text>
            </View>
            <View style={styles.noticeMessage}>
                <Text style={styles.messageText}>Bom dia alunos, nesta segunda-feira não esta...</Text>
                <Text style={styles.messageDate}>20/04/2023</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    noticeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        height: 150,
        padding: 10,
        gap: 10,
    },
    noticeUser:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
    },
    noticeUserText: {
        color: "#FFFFFF",
        fontSize:18
    },
    noticeMessage:{
        
    },
    messageText: {
        color: "#FFFFFF",
        fontSize: 16.5,
    },
    messageDate: {
        color: "#FFFFFF",
        fontSize: 14,
        textAlign: 'right',
        marginTop: 5,
    },
    userImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        width: 45,
        height: 45,
        borderColor: '#16232f',
        borderWidth: 2,
    },
});

export default ClassNotice;