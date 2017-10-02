import React, {Component} from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

export default class Home extends Component {
    render(){
        return (
            <View style={styles.homeContainer}>
                <Text style={styles.heading}>
                    Click Counter
                </Text>
                <Text style={styles.subheading}>
                    Count the number of clicks you can make for a given number of seconds
                </Text>
            </View>
        );
    }
}