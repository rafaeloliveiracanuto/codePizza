import React, {Component} from 'react'
import { CheckBox, Button } from 'react-native-elements'

export default class CheckBoxExample extends React.Component{

    render(){
        return(
            <CheckBox
                marginLeft
                checkedIcon={this.props.checkedIcon}//'dot-circle-o'
                uncheckedIcon={this.props.uncheckedIcon}//'circle-o'
                title={this.props.title}
                textStyle={{fontSize: 18}}
                size={35}
                checked={false}>
            </CheckBox>
        )
    }
}
    