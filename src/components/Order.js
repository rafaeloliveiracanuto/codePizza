import React, {Component} from 'react'
import{
    Text, StyleSheet,
    View, Dimensions
} from 'react-native'
import { Button } from 'react-native-elements'
import Styles from '../styles/Styles'
import RadioButtonGroup from './RadioButtonGroup'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

let sizeStyle = Styles.currentTab
let sizeTextStyle = Styles.currentText
let baseStyle = Styles.tab
let baseTextStyle = Styles.text
let extraStyle = Styles.tab
let extraTextStyle = Styles.text

let type = 'Size'

const initialState = {
    currentTab: 0,
}

export default class Order extends Component{

    state = {...initialState}

    nextTab = (props) => {
        let currentTab = props
        this.setState({currentTab})
        this.progressToNextTab()
    }

    progressToNextTab = () => {
        if(this.state.currentTab == 2){
            extraStyle = Styles.currentTab
            extraTextStyle = Styles.currentText

            sizeStyle = Styles.tab
            sizeTextStyle = Styles.text

            baseStyle = Styles.tab
            baseTextStyle = Styles.text

            type = 'Extra'
        }else if(this.state.currentTab == 1){
            extraStyle = Styles.tab
            extraTextStyle = Styles.text

            sizeStyle = Styles.tab
            sizeTextStyle = Styles.text

            baseStyle = Styles.currentTab
            baseTextStyle = Styles.currentText

            type = 'Base'
        }
        else{
            type = 'Result'
        }
    }

    //clearTab = () => {
     //   let currentTab = 0
    //    this.setState({currentTab})
   // }

    render(){
        
        return(
            <View style={{alignItems: 'center', alignContent: 'center', flex: 1, justifyContent: 'center'}}>
                <Text style={{padding: 20, fontSize: 16}}>Please select the size</Text>
                <View style={Styles.container}>
                    <View style={Styles.tabs}>
                        <View style={sizeStyle}>
                            <Text style={sizeTextStyle}>Size</Text>
                        </View>
                        <View style={baseStyle}>
                            <Text style={baseTextStyle}>Base</Text>
                        </View>
                        <View style={extraStyle}>
                            <Text style={extraTextStyle}>Extra</Text>
                        </View>
                    </View>
                    
                    <RadioButtonGroup type={type}></RadioButtonGroup>
                </View>
                <View style={{paddingTop: 20, marginLeft: width * 0.5}}>
                    <Button 
                        title='Next' type='outline' raised={true}
                        buttonStyle={Styles.button}
                        titleStyle={{color: '#000000', fontSize: 18}}
                        onPress={() => this.nextTab(++this.state.currentTab)}>
                            
                    </Button>
                </View>
    
            </View>
        )
    }
}
