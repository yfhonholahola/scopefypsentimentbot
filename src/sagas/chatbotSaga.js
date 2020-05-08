import { put, call, all, select } from "redux-saga/effects";
import { chatbotServices } from "services";
import Actions from "stores/actions/actions";
import { BOT_USER } from "constants/chatbot"
import { GiftedChat } from 'react-native-gifted-chat'

export function* setDialogflow(payload) {
  yield call(chatbotServices.setDialogflow, payload.language);
}

export function* botRespond(payload) {
    try {
        console.log("botRespond", payload);
        const { result } = payload;
        const text = result.queryResult.fulfillmentMessages[0].text.text[0];
        const webhookPayload = result.queryResult.webhookPayload;
      
        const newMessage = {
          _id: result.responseId,
          text,
          createdAt: new Date(),
          user: BOT_USER,
          sent: true,
          received: true
        };  
      
        if (webhookPayload && webhookPayload.is_image) {
          newMessage.text = text;
          newMessage.image = webhookPayload.url;
        }   
      
        if (newMessage) {
          const getChatbot = state => state.chatbot
          const chatbotState = yield select(getChatbot);

          console.log(GiftedChat.append(
            chatbotState.messages,
            [newMessage],
            Platform.OS !== 'web',
          ))
      
          yield put(Actions.botRespondSuccess(GiftedChat.append(
                chatbotState.messages,
                [newMessage],
                Platform.OS !== 'web',
              )
          ))
        }
    } catch (error) {
        yield put(Actions.botRespondFailure({ error }));
    }

}

export function* sendRequest(payload) {
  const lastElement = payload.messages.length > 0 ? payload.messages[0] : {};
  const sentMessage = lastElement.text || "";

  const result = yield call(chatbotServices.sendRequest, sentMessage)
  
  if (!result.error) {
    payload.messages[payload.messages.length - 1].received =true;
    yield all([
        put(Actions.sendSuccess(payload.messages)),
        put(Actions.botRespond({...result.result}))
    ]);
  } else {
    yield put(Actions.sendFailure({ error: result.error }));
  }
}
