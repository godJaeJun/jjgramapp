import { createStackNavigator} from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const SearchRoute = createStackNavigator(
    {
        Search: {
            screen: SearchScreen
        },
        ...sharedRoutes //unpack한다. 안에 내용만 들어가게
    },
    {
        ...sharedOptions
    }
)

export default SearchRoute;