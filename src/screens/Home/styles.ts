import { PixelRatio, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 80,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#333333',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginTop: -30,
        marginRight: 4,
        marginLeft: 12,
    },
    form: {
        marginTop: 70,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#262626',
    },
    emptyList: {
        color: '#6b6b6b',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 24
    },
    list: {
        width: '100%',
        paddingTop: 30,
        backgroundColor: '#262626',
        paddingHorizontal: 13,
    },
    listStatus: {
        width: '100%',
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 16
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    numberTasks: {
        width: 28,
        height: 24,
        borderRadius: 24 / 2,
        backgroundColor: '#1E6F9F',
        marginLeft: 8,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberDone: {
        width: 28,
        height: 24,
        borderRadius: 24 / 2,
        backgroundColor: '#8284FA',
        marginLeft: 8,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalsLabel: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
        fontWeight: 'bold'
    },
    dividerView: {
        width: '100%',
        backgroundColor: '#262626',
        alignItems: 'center',
    },
    divider: {
        width: '90%',
        height: 1,
        backgroundColor: '#6b6b6b',
    }
})