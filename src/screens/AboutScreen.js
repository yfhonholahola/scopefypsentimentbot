import React from 'react'
import { StyleSheet, TouchableOpacity, View,FlatList, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

export default class LanguageScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.welcome}>Welcome to Heong Kong Zai 香港仔!</Text>
                    <Text style={styles.instructions}>{`A true chatbot belonging to Hong Konger
一個真正屬於香港人的機器人

Talk to him. Chat to him. He can find your thought.
同佢傾。同佢講。佢係你既虛擬朋友，知你諗緊乜

copyrigh@Alfred Hon`}</Text>
                </View>            
                <ListItem
                    Component={TouchableOpacity}
                    title={'Back'}
                    titleStyle={{ alignSelf: 'center' }}
                    rightIcon={null}
                    onPress={() => this.props.navigation.goBack()}
                    topDivider
                    bottomDivider                    
                />            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
});