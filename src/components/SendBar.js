import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Send } from 'react-native-gifted-chat'

export default class SendBar extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <MaterialIcons color='#b2b2b2' name='mic' size={28} style={styles.buttonContainer} />
                </TouchableOpacity>
                <Send {...this.props}>
                    <MaterialIcons color='#4580c6' name='send' size={28} style={styles.buttonContainer} />
                </Send>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonContainer: {
        marginVertical: 10,
        marginRight: 15
    }
})