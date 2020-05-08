import * as firebase from "firebase";
import { firebaseConfig } from "root/google/config";
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

const initialGoogle = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    GoogleSignin.configure({
      webClientId: firebaseConfig.clientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });    
  }
};

const loginRequestWithEmailPassword = (payload) => {
  return (
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.authData.email, payload.authData.password)
      .then((res) => {
        return {
          token: res.user.uid,
          user: {
            idToken: res.user.uid,
            serverAuthCode: res.user.xa,
            user:{
              email: res.user.email || '',
              id: res.user.uid || '',
              givenName: res.user.displayName || '',
              familyName: "",
              photo: res.user.photoURL || {},
              name: res.user.displayName || ''
            }
          }
        }
      })      
      .catch((error) => {
        return { error: error.message };        
      })
  );
};

const loginRequestWithPopup = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return {
      token: userInfo.idToken,
      user: userInfo
    }
  } catch (error) {
    return { error: error.message }; 
  }  
}

const logOutWithEmailPassword = () => {
  try {
    return firebase.auth().signOut();
  } catch (error) {
    console.error(error)
    return {error};
  }
}

const logOutWithPopup = async () => {
  try {
    await GoogleSignin.revokeAccess();
    return await GoogleSignin.signOut();
  } catch (error) {
    console.error(error)
    return {error};
  }
}

export { initialGoogle, loginRequestWithEmailPassword, loginRequestWithPopup, logOutWithEmailPassword, logOutWithPopup };
