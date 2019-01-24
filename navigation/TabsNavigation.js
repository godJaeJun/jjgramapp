import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator, TabBarBottom } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";
import SearchRoute from "../routes/SearchRoute";
import { Ionicons } from "@expo/vector-icons";

const TabsNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: HomeRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="ios-home"
                    size={30}
                    color={focused ? "black" : "gray"}
                  />
                )
              }
        },
        Search: {
            screen: SearchRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="ios-search"
                    size={30}
                    color={focused ? "black" : "gray"}
                  />
                )
              }
        },
        AddPhoto:{
            screen: View,
            navigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused }) => (
                  <Ionicons 
                  name={'ios-add-circle-outline'} 
                  size={30} 
                  color={focused ? "black" : "gray"} />
                ),
                tabBarOnPress: () => {
                    // Works!
                    navigation.navigate("TakePhoto");
                  }
            })
        },
        Notifications: {
            screen: NotificationsRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="ios-heart"
                    size={30}
                    color={focused ? "black" : "gray"}
                  />
                )
              }
        },
        Profile: {
            screen: ProfileRoute,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="ios-person"
                    size={30}
                    color={focused ? "black" : "gray"}
                  />
                )
              }
            }
        },
    {
        tabBarPosition: "bottom",
        tabBarOptions:{
            showLabel:false, //기본라벨 제거
            style:{
                backgroundColor: "#FBFBFB",
                height:45
            }
        },
        swipeEnabled: true,
        animationEnabled: true
    }
)
export default TabsNavigation;