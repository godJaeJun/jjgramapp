import { createStackNavigator} from "react-navigation";
import NotificationsScreen from "../screens/NotificationsScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const NotificationsRoute = createStackNavigator(
    {
        Notifications: {
            screen: NotificationsScreen
        },
        ...sharedRoutes //unpack한다. 안에 내용만 들어가게
    },
    {
        ...sharedOptions
    }
)

export default NotificationsRoute;