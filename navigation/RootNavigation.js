import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import UploadPhotoScreen from "../screens/UploadPhotoScreen";
import AddPhotoNavigation from "./AddPhotoNavigation";

const RootNavigation = createStackNavigator(
    {
        Tabs: {
            screen:TabsNavigation,
            navigationOptions:{
                header:null
            }
        },
        TakePhoto: {
            screen: AddPhotoNavigation,
            navigationOptions: {
                header:null
            }
        },
        UploadPhoto: {
            screen: UploadPhotoScreen,
            navigationOptions: ({ navigation }) => ({
              title: "Upload Photo",
              headerLeft: (
                <Button
                  title="Cancel"
                  color="black"
                  onPress={() => navigation.goBack(null)}
                />
              )
            })
          }
        },
    {
        mode: "modal"   //모달은 위에 올라오는 창이다. 모달안하면 옆으로 나타난다.
    }
);

export default RootNavigation;
