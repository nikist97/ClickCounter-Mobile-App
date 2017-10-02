import React from 'react'
import {Keyboard, View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'

const InputTimerComponent = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.timerInput}
                       onChangeText = {(text) => {
                           props.onChanged(text);
                       }}
                       underlineColorAndroid = "transparent"
                       keyboardType = "numeric"
                       placeholder = "Number of seconds"
                       placeholderTextColor = '#8c7c82'
                       autoCapitalize = "none"
                       maxLength = {6}
            />
            {props.timerStarted ?
                <Text>Timer running</Text>
                :
                <TouchableOpacity
                    underlayColor = {'gray'}
                    onPress = {
                        () => {
                            Keyboard.dismiss();
                            props.startTimer();
                        }
                    }>
                    <Text style={styles.button}> Start timer</Text>
                </TouchableOpacity>
            }
        </View>
    );
};

export default InputTimerComponent;