import { createStackNavigator} from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const HomeRoute = createStackNavigator(
    {
        Home: {
            screen: FeedScreen
        },
        ...sharedRoutes //unpack한다. 안에 내용만 들어가게
    },
    {
       
    }
)

export default HomeRoute;