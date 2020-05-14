import * as React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ChatbotScreen,
  LoginScreen,
  SettingScreen,
  LanguageScreen,
  AboutScreen,
} from "screens";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationServices } from 'services'

const SettingStack = createStackNavigator();

function SettingStackScreen({ navigation }) {
  return (
    <SettingStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Main" component={SettingScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function ChatbotStackScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => {
          let label;

          switch (route.name) {
            case "Chatbot":
              label = "Chat";
              break;
            case "Settings":
              label = "Settings";
              break;
            default:
          }

          return <Text style={{ color }}>{label}</Text>;
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Chatbot") {
            iconName = focused ? "chat-bubble" : "chat-bubble-outline";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#73c2cc",
        inactiveTintColor: "white",
        style: { backgroundColor: "#B0E0E6" },
      }}
    >
      <Tab.Screen name="Chatbot" component={ChatbotScreen} />
      <Tab.Screen name="Settings" component={SettingStackScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigatorRef => {NavigationServices.setTopLevelNavigator(navigatorRef);}}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#B0E0E6" },
            headerTintColor: "white",
            headerLeft: null,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chatbot"
            component={ChatbotStackScreen}
            options={{
              title: "Hoeng Kong Zai 香港仔",
              headerRight: () => (
                <TouchableOpacity style={styles.headerRightContainer}>
                  <Image
                    style={styles.headerRight}
                    source={require("assets/AppIcons/appstore.png")}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerRightContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 13,
    borderColor: "white",
  },
  headerRight: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
