import React, {Component} from 'react'
import{
    Text, StyleSheet,
    View, Dimensions
} from 'react-native'
import { Button } from 'react-native-elements'
import Styles from '../styles/Styles'
import RadioButtonGroup from './RadioButtonGroup'

const width = Dimensions.get('window').width

const initialState = {
    currentTab: 0,
    sizeStyle: Styles.currentTab,
    sizeTextStyle: Styles.currentText,
    baseStyle: Styles.tab,
    baseTextStyle: Styles.text,
    extraStyle: Styles.tab,
    extraTextStyle: Styles.text,
    type: 'Size'
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
            const extraStyle = Styles.currentTab
            const extraTextStyle = Styles.currentText

            const sizeStyle = Styles.tab
            const sizeTextStyle = Styles.text

            const baseStyle = Styles.tab
            const baseTextStyle = Styles.text

            const type = 'Extra'

            this.setState({extraStyle, extraTextStyle, sizeStyle,
                sizeTextStyle, baseStyle, baseTextStyle, type})
        }else if(this.state.currentTab == 1){
            const extraStyle = Styles.tab
            const extraTextStyle = Styles.text

            const sizeStyle = Styles.tab
            const sizeTextStyle = Styles.text

            const baseStyle = Styles.currentTab
            const baseTextStyle = Styles.currentText

            const type = 'Base'

            this.setState({extraStyle, extraTextStyle, sizeStyle,
                sizeTextStyle, baseStyle, baseTextStyle, type})
        }
        else{
            const type = 'Result'
            this.setState({type})
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
                        <View style={this.state.sizeStyle}>
                            <Text style={this.state.sizeTextStyle}>Size</Text>
                        </View>
                        <View style={this.state.baseStyle}>
                            <Text style={this.state.baseTextStyle}>Base</Text>
                        </View>
                        <View style={this.state.extraStyle}>
                            <Text style={this.state.extraTextStyle}>Extra</Text>
                        </View>
                    </View>
                    
                    <RadioButtonGroup type={this.state.type}></RadioButtonGroup>
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
