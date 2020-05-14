import React from 'react'
import { StyleSheet, View, Platform, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { SendBar, CustomActions } from 'components'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { connect } from 'react-redux'
import { BOT_USER } from 'constants/chatbot'
import Actions from 'stores/actions/actions'

class ChatbotScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setDialogflow();
  }

  _onSend(messages = []) {
    const sentMessages = [{...messages[0], sent:true, received: false}];
    this.props.sendRequest(GiftedChat.append(this.props.chatbot.messages, sentMessages, Platform.OS !== 'web'));  
  }

  _renderCustomActions = props => Platform.OS === 'web' ? null : (
      <CustomActions {...props} onSend={() => {}} />
  )

  _renderSend = props => (
    <SendBar {...props} />
  )  

  render() {
    const { messages } = this.props.chatbot
    const { user } = this.props.auth
    const { email = '', givenName = '', photo = {} } = user.user || {}
    const chatbotUser = {
      _id: 1,
      name: (givenName || email || 'Test'),
      name: 'aa',
      avatar: photo || ''
    }
    return (
      <ActionSheetProvider>
        <View
          style={styles.container}
          accessible
          accessibilityLabel='chatbot'
          testID='chatbot'
        >
            <GiftedChat
              messages={messages}          
              user={chatbotUser}
              placeholder="Write a message... "
              alwaysShowSend
              loadEarlier
              // onLoadEarlier={this.onLoadEarlier}
              // isLoadingEarlier={this.state.isLoadingEarlier}              
              showUserAvatar
              onSend={messages => this._onSend(messages)}
              keyboardShouldPersistTaps='never'
              renderActions={this._renderCustomActions}
              renderSend={this._renderSend}
              scrollToBottom
            />
        </View>
      </ActionSheetProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
   },
})

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
  chatbot: state.chatbot,
});

const mapDispatchToProps = dispatch => {
  return {
    setDialogflow: () => dispatch(Actions.setDialogflow()),
    sendRequest: (messages) => dispatch(Actions.sendRequest(messages))
  };
};  

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotScreen);
