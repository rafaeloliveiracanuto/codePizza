import React, {Component} from 'react'
import{
    Text, StyleSheet,
    View, Dimensions
} from 'react-native'
import { CheckBox, Button } from 'react-native-elements'
import CheckBoxGroup from './CheckBoxGroup'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

let styles = StyleSheet.create({
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

let sizeStyle = styles.currentTab
let sizeTextStyle = styles.currentText
let baseStyle = styles.tab
let baseTextStyle = styles.text
let extraStyle = styles.tab
let extraTextStyle = styles.text

let type = 'Size'

const initialState = {
    currentTab: 0,
    currentTabColor: styles.currentTab.backgroundColor,
    currentText: styles.currentText.color,
    tabColor: styles.tab.backgroundColor,
    text: styles.text.color,
    checkBoxType: 'Size'
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
            extraStyle = styles.currentTab
            extraTextStyle = styles.currentText

            sizeStyle = styles.tab
            sizeTextStyle = styles.text

            baseStyle = styles.tab
            baseTextStyle = styles.text

            type = 'Extra'
        }else if(this.state.currentTab == 1){
            extraStyle = styles.tab
            extraTextStyle = styles.text

            sizeStyle = styles.tab
            sizeTextStyle = styles.text

            baseStyle = styles.currentTab
            baseTextStyle = styles.currentText

            type = 'Base'
        }else{
            extraStyle = styles.tab
            extraTextStyle = styles.text

            sizeStyle = styles.currentTab
            sizeTextStyle = styles.currentText

            baseStyle = styles.tab
            baseTextStyle = styles.text

            type = 'Size'

            this.clearTab()
        }
    }

    clearTab = () => {
        let currentTab = 0
        this.setState({currentTab})
    }

    render(){
        
        return(
            <View style={{alignItems: 'center', alignContent: 'center', flex: 1, justifyContent: 'center'}}>
                <Text style={{padding: 20, fontSize: 16}}>Please select the size</Text>
                <View style={styles.container}>
                    <View style={styles.tabs}>
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
                    
                    <CheckBoxGroup type={type}></CheckBoxGroup>
                </View>
                <View style={{paddingTop: 20, marginLeft: width * 0.5}}>
                    <Button 
                        title='Next' type='outline' raised={true}
                        buttonStyle={styles.button}
                        titleStyle={{color: '#000000', fontSize: 18}}
                        onPress={() => this.nextTab(++this.state.currentTab)}>
                            
                    </Button>
                </View>
                
                    
            </View>
        )
    }
}
