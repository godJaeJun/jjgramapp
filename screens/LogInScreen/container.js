import React, { Component } from "react";
import LogInScreen from "./presenter";

class Container extends Component{
    //네비게이션 옵션을 설정한다. title 상단이름 정하기, header=null은 상단 없애기
    static navigationOptions=({navigation}) => ({
        title:'LogIn'
    });
    render(){
        return <LogInScreen/>;
    }
}

export default Container;