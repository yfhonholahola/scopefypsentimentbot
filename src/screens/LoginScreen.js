import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { GoogleSigninButton } from "@react-native-community/google-signin";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";
import Actions from "stores/actions/actions";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.props.initialGoogle();
  }

  _authHandler = async (event) => {
    event.preventDefault();
    const authData = {
      type: "email",
      email: this.state.email,
      password: this.state.password,
    };
    this.props.onTryAuth(authData);
  };

  _signIn = async (event) => {
    event.preventDefault();
    const authData = {
      type: "google",
    };
    this.props.onTryAuth(authData);
  };

  render() {
    return (
      <View style={styles.container} accessibilityLabel="login" testID="login">
        <View style={styles.inputContainer}>
          <FontAwesome
            style={[{ fontSize: 30 }, styles.inputIcon]}
            name="lock"
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            accessibilityLabel="emailField" testID="emailField"            
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome
            style={[{ fontSize: 22 }, styles.inputIcon]}
            name="envelope"
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            accessibilityLabel="passwordField" testID="passwordField"            
          />
        </View>

        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          accessibilityLabel="googleField" testID="googleField"            
        />

        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this._authHandler}
          accessibilityLabel="loginButton" testID="loginButton"            
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0E0E6",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  loginText: {
    color: "white",
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: "flex-end",
  },
});

const mapStateToProps = (state, ownProps) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAuth: (authData) => dispatch(Actions.loginRequest(authData)),
    initialGoogle: () => dispatch(Actions.initialGoogle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
