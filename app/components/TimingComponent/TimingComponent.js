import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

const TimingComponent = (props) => {
    return(
        <View style={styles.timingContainer}>
            {props.currentSeconds >= 0 ? <Text>Time left: {props.currentSeconds}</Text> : <Text>Enter a number and start the timer</Text>}
        </View>
    );
};

export default TimingComponent;