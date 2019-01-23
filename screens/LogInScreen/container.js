import React, { Component } from "react";
import { Alert } from "react-native";
import LogInScreen from "./presenter";

class Container extends Component{
    state={
        username:"",
        password:"",
        isSubmitting:false
    };
    //네비게이션 옵션을 설정한다. title 상단이름 정하기, header=null은 상단 없애기
    static navigationOptions=({navigation}) => ({
        header:null
    });
    render(){
        return <LogInScreen {...this.state} 
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
        />;
    }
    _changeUsername=(text)=>{
        this.setState({username:text})
    }
    _changePassword=(text)=>{
        this.setState({password:text})
    }
    _submit =()=>{
        const {username,password,isSubmitting} = this.state;
        const { login } = this.props;
        if(!isSubmitting){
            if(username&&password){
                this.setState({
                    isSubmitting:true
                });
                login(username,password);
            }
            else{
                Alert.alert("All fields are required");
            }
        }
    }
}

export default Container;