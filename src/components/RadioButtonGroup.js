import React, {Component} from 'react'
import{
    Text, StyleSheet,
    View, Dimensions
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import Order from './Order'

export default class RadioButtonGroup extends Component{

    state = {
        checkedSize: 'Small     £5',
        valueSize: 5,
        checkedBase: 'Pepperoni + £4',
        valueBase: 4,
        checkedExtra: 'Onions + £1',
        valueExtra: 1, 
        type: 'Size'
    }

    render(){

        const radioButtonSize = [
            <View style={{flex: 1, flexDirection: 'row'}} key='1'>
                <RadioButton
                    value='Small     £5'
                    status={this.state.checkedSize === 'Small     £5' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedSize: 'Small     £5', valueSize: 5 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Small     £5</Text>
            </View>,
            <View style={{flex: 1, flexDirection: 'row'}} key='2'>
                <RadioButton
                    value='Large     £10'
                    status={this.state.checkedSize === 'Large     £10' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedSize: 'Large     £10', valueSize: 10 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Large     £10</Text>
            </View>
        ]
           
        const radioButtonBase = [
            <View style={{flex: 1, flexDirection: 'row'}} key='1'>
                <RadioButton
                    value='Pepperoni + £4'
                    status={this.state.checkedBase === 'Pepperoni + £4' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedBase: 'Pepperoni + £4', valueBase: 4 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Pepperoni + £4</Text>
            </View>,
            <View style={{flex: 1, flexDirection: 'row'}} key='2'>
                <RadioButton
                    value='Mozzarella + £2'
                    status={this.state.checkedBase === 'Mozzarella + £2' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedBase: 'Mozzarella + £2', valueBase: 2 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Mozzarella + £2</Text>
            </View>,
            <View style={{flex: 1, flexDirection: 'row'}} key='3'>
                <RadioButton
                    value='Margherita + £1'
                    
                    status={this.state.checkedBase === 'Margherita + £1' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedBase: 'Margherita + £1', valueBase: 1 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Margherita + £1</Text>
            </View>
        ]
        
        const radioButtonExtra = [
            <View style={{flex: 1, flexDirection: 'row'}} key='1'>
                <RadioButton
                    value='Onions + £1'
                    status={this.state.checkedExtra === 'Onions + £1' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedExtra: 'Onions + £1', valueExtra: 1 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Onions + £1</Text>
            </View>,
            <View style={{flex: 1, flexDirection: 'row'}} key='2'> 
                <RadioButton
                    value='Cheese + £2'
                    status={this.state.checkedExtra === 'Cheese + £2' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedExtra: 'Cheese + £2', valueExtra: 2 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Cheese + £2</Text>
            </View>,
            <View style={{flex: 1, flexDirection: 'row'}} key='3'>
                <RadioButton
                    value='Olives + £3'
                    status={this.state.checkedExtra === 'Olives + £3' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checkedExtra: 'Olives + £3', valueExtra: 3 }) }}>
                </RadioButton>
                <Text style={{paddingTop: 5, paddingLeft: 10, fontSize: 18}}>Olives + £3</Text>
            </View>
        ]

        let choice = []

        if(this.props.type == 'Size'){
            choice = radioButtonSize
        }else if(this.props.type == 'Base'){
            choice = radioButtonBase
        }else if(this.props.type == 'Extra'){
            choice = radioButtonExtra
        }else if(this.props.type == 'Result'){
            const options = [this.state.checkedSize, this.state.checkedBase, this.state.checkedExtra]
            const number = this.state.valueSize + this.state.valueBase + this.state.valueExtra
            this.props.navigation.navigate({name: 'Checkout', params: {options: options, result: number}})
        }
        else{
            choice = null
        }
        
        return(<View style={{flex: 1, flexDirection: 'column', padding: 15}}>{choice}</View>)
    }
    
}