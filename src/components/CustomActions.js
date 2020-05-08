import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { connectActionSheet } from '@expo/react-native-action-sheet'

class CustomActions extends React.Component {

  onActionsPress = () => {    
    const options = [
      'Photo or Video',
      'File',
      'Location',
      'Poll',
      'Contact',
      'Cancel'
    ]
    const cancelButtonIndex = options.length - 1
    return this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      async buttonIndex => {
        const { onSend } = this.props
        switch (buttonIndex) {
          case 0:
            return
          case 1:
            return
          case 2:
          default:
        }
      },
    )
  }

  renderIcon = () => {
    if (this.props.renderIcon) {
      return this.props.renderIcon()
    }
    return (
      <View style={[styles.wrapper, this.props.wrapperStyle]}>
        <Text style={[styles.iconText, this.props.iconTextStyle]}>+</Text>
      </View>
    )
  }

  _renderButton = () => {
    return (
        <TouchableOpacity
            style={[styles.container, this.props.containerStyle]}
            onPress={this.onActionsPress}
        >
            {this.renderIcon()}
        </TouchableOpacity>
    )
  }

  render() {
    const ConnectedButton = connectActionSheet(this._renderButton)

    return (
        <TouchableOpacity
            style={[styles.container, this.props.containerStyle]}
            onPress={this.onActionsPress}
        >
            {this.renderIcon()}
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
})

const ConnectedCustomActions = connectActionSheet(CustomActions);

export default ConnectedCustomActions;
