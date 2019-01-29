import React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";

const AddPhotoNavigation = createMaterialTopTabNavigator(
  {
   CameraScreen,
   LibraryScreen
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
        header: null,
        headerMode: 'none',
        tabBarVisible: true,
        tabBarLabel: () => {
          const { routeName } = navigation.state;
          switch (routeName) {
            //
          }
          return <Text>{routeName}</Text>;
        },
      }),
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        showLabel: true,
        upperCaseLabel: true,
        activeTintColor: "black",
        inactiveTintColor: "#bbb",
        style: {
          backgroundColor: "white",
          alignItems: "center"
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: "600"
        },
        showIcon: false
      }
  }
);

export default AddPhotoNavigation;