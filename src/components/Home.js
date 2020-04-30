import React, {Component} from 'react'
import{
    StyleSheet, Text, View,
    Dimensions, TouchableHighlight
} from 'react-native'
import {Button} from 'react-native-elements'

const styles = StyleSheet.create({
    text: {
        paddingBottom: 20,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center'
    }, 
    button: {
        height: Dimensions.get('window').height * 0.07,
        width: Dimensions.get('window').width * 0.2,
        backgroundColor: '#D3D3D3',
        borderColor: '#000000'
    }
})

function HomeScreen({navigation}){
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={styles.text}>Welcome to CodeLeap pizza!</Text>
            <Text style={{paddingBottom: 30, fontSize: 15}}>This will help you order a custom pizza</Text>
            <Button 
                title='Start' type='solid' raised={true}
                buttonStyle={styles.button}
                titleStyle={{color: '#000000'}}
                onPress={() => navigation.navigate('Order')}>
            </Button>
        </View>
    )
}

export default HomeScreen