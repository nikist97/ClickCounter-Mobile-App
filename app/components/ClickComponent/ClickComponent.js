import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

const ClickComponent = (props) => {
    return (
        <View style={styles.clickContainer}>
        {props.timerStarted ?
            <TouchableOpacity
                style={styles.clickComponent}
                onPress={() => {
                    props.countClick();
                }
                }>
                <Text>Click in this container</Text>
                <Text>Number of clicks: {props.numberOfClicks}</Text>
            </TouchableOpacity>
            :
            <Text>Number of clicks: {props.numberOfClicks}</Text>}
        </View>
    );
};

export default ClickComponent;