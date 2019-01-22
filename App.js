import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";
const { persistor, store } = configureStore();
import AppContainer from "./components/AppContainer";
//PersistGate는 디스크에서 리덕스 스토어를 불러오기전까지는 앱을 보여주지 않는다.

class App extends React.Component {
  state = {
    isLoadingComplete: false  //로딩
  };
  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {//로딩이 false면
      return (
        //AppLoading은 3개의 옵션필요 불러올것, 에러, 불러오고 나서의 액션
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      //PersistGate는 중요하다 다 불러와야지만 안에있는 내용을 보여준다.
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer/>
        </PersistGate>
      </Provider>
    );
  }
  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/logo.png"),
        require("./assets/images/logo-white.png"),
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/photoPlaceholder.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ]);
  };
  _handleLoadingError = error => {
    console.error(error);
  };
  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}

export default App;
