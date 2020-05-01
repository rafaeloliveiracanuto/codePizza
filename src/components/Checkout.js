import React, {Component} from 'react'
import{
    Text, StyleSheet,
    View, Dimensions
} from 'react-native'
import Styles from '../styles/Styles'
import {Button} from 'react-native-elements'

const width = Dimensions.get('window').width

function CheckoutScreen({navigation, route}){

    return(
        <View style={{alignItems: 'center', alignContent: 'center', flex: 1, justifyContent: 'center'}}>
            <Text style={{padding: 20, fontSize: 16}}>Please confirm your order</Text>
            <View style={Styles.container}>
            <View style={{alignItems: 'center', alignContent: 'center', flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 18}}>{route.params.options[0]}</Text>
                <Text style={{fontSize: 18}}>{route.params.options[1]}</Text>
                <Text style={{fontSize: 18}}>{route.params.options[2]}</Text>
                <Text style={{fontSize: 18, paddingTop: 50}}>Total: £{route.params.result}</Text>
            </View>
            </View>
            <View style={{paddingTop: 20, marginLeft: width * 0.5}}>
                <Button 
                    title='Order now' type='outline' raised={true}
                    buttonStyle={Styles.button}
                    titleStyle={{color: '#000000', fontSize: 18}}
                    onPress={() => alert('Your order of £'+route.params.result+' was sent succesfully!')}>       
                </Button>
            </View>
        </View>
    )
    
}

export default CheckoutScreen