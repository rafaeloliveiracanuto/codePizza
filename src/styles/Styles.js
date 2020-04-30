import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        borderColor: '#000000',
        borderWidth: 1,
        height: height * 0.4,
        width: width * 0.8,
    },
    button: {
        height: height * 0.07,
        width: width * 0.3,
        backgroundColor: 'transparent',
        borderColor: '#000000',
    },
    tab: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: 1,
        height: height * 0.1,
        width: width * 0.8,
        alignItems: 'center', alignContent: 'center', flex: 1, justifyContent: 'center'
    },
    tabs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    currentTab: {
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 1,
        height: height * 0.1,
        width: width * 0.8,
        alignItems: 'center', alignContent: 'center', flex: 1, justifyContent: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
    },
    currentText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    }
})