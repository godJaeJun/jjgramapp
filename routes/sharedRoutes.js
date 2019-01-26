import React from "react";
import LikeScreen from "../screens/LikesScreen";
import CommentsScreen from "../screens/CommentsScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen";
import PhotoScreen from "../screens/PhotoScreen";
import NavButton from "../components/NavButton";

const sharedRoutes={
    Likes: {
        screen: LikeScreen,
        navigationOptions: {
            headerTitle:"Likes",
            headerLeft: props => (
                <NavButton
                  iconName={"ios-arrow-back"}
                  {...props}
                />
              ),
            headerStyle:{
                backgroundColor:"#FBFBFB"
            }
        }
    },
    Comments: {
        screen: CommentsScreen,
        navigationOptions: {
            headerTitle:"Comments",
            headerLeft: props => (
                <NavButton
                  iconName={"ios-arrow-back"}
                  {...props}
                />
              ),
            headerStyle:{
                backgroundColor:"#FBFBFB"
            }
        }
    },
    ProfileDetail:{
        screen:ProfileDetailScreen,
        navigationOptions: {
            headerLeft: props => (
                <NavButton
                  iconName={"ios-arrow-back"}
                  {...props}
                />
              ),
            headerStyle:{
                backgroundColor:"#FBFBFB"
            }
        }
    },
    Photo:{
        screen:PhotoScreen,
        navigationOptions:{
            headerTitle:"Photo",
            headerLeft: props => (
                <NavButton
                  iconName={"ios-arrow-back"}
                  {...props}
                />
              ),
            headerStyle:{
                backgroundColor:"#FBFBFB"
            }
        }
    }
};
const sharedOptions={
    navigationOptions: {
        headerStyle:{
            backgroundColor:"#FBFBFB"
        }
    }
};

export {sharedOptions};
export default sharedRoutes;