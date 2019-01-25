import { createStackNavigator} from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: ({screenProps})=>({
                headerTitle: screenProps.username
            })
        },
        ...sharedRoutes //unpack한다. 안에 내용만 들어가게
    },
    {
        ...sharedOptions
    }
)

export default ProfileRoute;