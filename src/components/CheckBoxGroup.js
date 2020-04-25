import React, {Component} from 'react'
import{
    Text, StyleSheet,
    View, Dimensions
} from 'react-native'
import CheckBoxExample from './CheckBoxExample'

export default props => {
    const checkBoxSize =
        <View>
            <CheckBoxExample title='Small     £5' checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'></CheckBoxExample>
            <CheckBoxExample title='Large     £10' checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'></CheckBoxExample>
        </View>

    const checkBoxBase = 
        <View>
            <CheckBoxExample title='Pepperoni + £4' checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'></CheckBoxExample>
            <CheckBoxExample title='Mozzarella + £2' checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'></CheckBoxExample>
            <CheckBoxExample title='Margherita + £1' checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'></CheckBoxExample>
        </View>

    const checkBoxExtra =
        <View>
            <CheckBoxExample title='Onions + £1' checkedIcon='check-square-o'
            uncheckedIcon='square-o'></CheckBoxExample>
            <CheckBoxExample title='Cheese + £2' checkedIcon='check-square-o'
            uncheckedIcon='square-o'></CheckBoxExample>
            <CheckBoxExample title='Olives + £3' checkedIcon='check-square-o'
            uncheckedIcon='square-o'></CheckBoxExample>
        </View>

    let choice

    if(props.type == 'Size'){
        choice = checkBoxSize
    }else if(props.type == 'Base'){
        choice = checkBoxBase
    }else if(props.type == 'Extra'){
        choice = checkBoxExtra
    }else{
        choice = null
    }

    return(<View>{choice}</View>)
}