import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
} from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import Actions from "stores/actions/actions";

const list = [
  {
    title: "Language",
    icon: "language",
    forward: "Language",
  },
  {
    title: "About",
    icon: "help",
    forward: "About",
  },
  {
    title: "Logout",
    icon: "ios-exit",
    type: "ionicon",
    forward: "Login",
  },
];

class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  keyExtractor = (item, index) => index.toString();

  _onPressHandler = (item) => {
    switch (item.title) {
      case "Language":
      case "About":
        this.props.navigation.navigate(item.forward);
        break;
      case "Logout":
        this.props.logOut();
        break;
      default:
    }
    // 
  };

  renderItem = ({ item }) => (
    <ListItem
      Component={TouchableOpacity}
      title={item.title}
      leftIcon={{ name: item.icon, type: item.type }}
      onPress={() => this._onPressHandler(item)}
      bottomDivider
      chevron
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(Actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
