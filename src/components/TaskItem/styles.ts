import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container :{
        width: '100%',
        backgroundColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 5,
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    titleDone: {
        color: '#fff',
        fontSize: 18,
        textDecorationLine: 'line-through'
    },
    buttonCheckTask :{
        borderRadius: 5,
        padding: 10,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button :{
        borderRadius: 5,
        padding: 10,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
})