import React from 'react'
import { StyleSheet, TouchableOpacity, View,FlatList, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from "react-redux";
import Actions from "stores/actions/actions";


const list = [
    {
      title: 'English',
      locale: 'en'
    },
    {
      title: '廣東話',
      locale: 'zh-HK'
    },
]

class LanguageScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    keyExtractor = (item, index) => index.toString()

    _onPressHandler = (locale) => {
        this.props.setDialogflow(locale)
        this.props.navigation.goBack()
    }

    _renderItem = ({ item }) => (
        <ListItem
            Component={TouchableOpacity}
            title={item.title}
            onPress={() => this._onPressHandler(item.locale)}
            rightIcon={this.props.chatbot.language===item.locale && {name: 'check'}}
            bottomDivider
        />
    )

    render () {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this._renderItem}
                />            

                <ListItem
                    Component={TouchableOpacity}
                    title={'Back'}
                    titleStyle={{ alignSelf: 'center' }}
                    rightIcon={null}
                    onPress={() => this.props.navigation.goBack()}
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
});

const mapStateToProps = (state, ownProps) => ({
    chatbot: state.chatbot
});

const mapDispatchToProps = (dispatch) => {
  return {
    setDialogflow: language => dispatch(Actions.setDialogflow(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageScreen);