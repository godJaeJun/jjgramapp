import { createStackNavigator} from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen
        },
        ...sharedRoutes //unpack한다. 안에 내용만 들어가게
    },
    {
        
    }
)

export default ProfileRoute;