import Actions, { ActionTypes } from "stores/actions/actions";

describe("actions", () => {
  it("initialGoogle", () => {
    const expectedAction = {
      type: ActionTypes.INITIAL_GOOGLE,
    };
    expect(Actions.initialGoogle()).toEqual(expectedAction);
  });

  it("loginRequest", () => {
    const authData = {
        email: '123@123.com',
        password: 'passwd'
    }
    const expectedAction = {
      type: ActionTypes.LOGIN_REQUEST,
      authData
    };
    expect(Actions.loginRequest(authData)).toEqual(expectedAction);
  });  

  it("logout", () => {
    const expectedAction = {
      type: ActionTypes.LOGOUT
    };
    expect(Actions.logout()).toEqual(expectedAction);
  }); 
  
  it("setDialogflow", () => {
    const expectedAction = {
      type: ActionTypes.SET_DIALOGFLOW
    };
    expect(Actions.setDialogflow()).toEqual(expectedAction);
  });
  
  it("sendRequest", () => {
    const messages={
      "text": "How are you?",
      "user": {
        "_id": 1,
        "name": "aa",
        "avatar": {}
      },
      "createdAt": "2020-05-14T09:27:29.507Z",
      "_id": "33784861-df59-4329-a0ed-bc7258a3a8ba",
      "sent": true,
      "received": false
    }
    const expectedAction = {
      type: ActionTypes.SEND_REQUEST,
      messages
    };
    expect(Actions.sendRequest(messages)).toEqual(expectedAction);
  });  
});
