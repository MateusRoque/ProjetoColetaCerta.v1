import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "./home";
import { AboutScreen } from "./about";

export function Nav() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, shadow }) => {
            size = 25;
            let iconName;
            if (focused) {
              color = "white";
              size = 35;
              shadow = 15;
            }
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Notícias") {
              value = 10;
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle";
            }
            // firulas
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={{ elevation: shadow, shadowColor: "#47591E" }}
              />
            );
          },
          tabBarItemStyle: {
            backgroundColor: "#87A646",
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#47591E",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notícias"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
