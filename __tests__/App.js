import 'react-native';
import React from 'react';
import { NativeModules } from 'react-native';
import { shallow } from 'enzyme';
import App from '../App';
import { LoginScreen } from 'screens'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-dialogflow', () => {})

jest.mock('@react-native-community/google-signin', () => {
  const GoogleSigninButton = () => {}
  GoogleSigninButton.Color = {
    Auto: 0,
    Light: 1,
    Dark: 2
  }
  GoogleSigninButton.Size = {
    Icon: 0,
    Standard: 1,
    Wide: 2
  }

  return GoogleSigninButton
});

NativeModules.RNGoogleSignin = {
  SIGN_IN_CANCELLED: '0',
  IN_PROGRESS: '1',
  PLAY_SERVICES_NOT_AVAILABLE: '2',
  SIGN_IN_REQUIRED: '3',  
};

// jest.mock('@react-native-community/google-signin', () => {});

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
/*
it('login correct', () => {
  const tree = renderer.create(
    <LoginScreen />
    ).toJSON();
  expect(tree).toMatchSnapshot();
})
*/

describe('App', () => {
  it('App',()=>{
    
  })
})
