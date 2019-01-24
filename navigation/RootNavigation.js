import { createStackNavigator} from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";

const RootNavigation = createStackNavigator(
    {
        Tabs: {
            screen:TabsNavigation,
            navigationOptions:{
                header:null
            }
        },
        TakePhoto: {
            screen: TakePhotoScreen,
            navigationOptions: {
                header:null
            }
        }
    },
    {
        mode: "modal"   //모달은 위에 올라오는 창이다. 모달안하면 옆으로 나타난다.
    }
);

export default RootNavigation;
