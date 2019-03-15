'use strict';

import React, {Component} from "react";
import {SafeAreaView, View} from "react-native";
import Todo from "./todo";
import {Provider} from "react-redux";
import store from "./store/storeConfig";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Provider store = {store}>
                <SafeAreaView style = {{backgroundColor: "#fff", flex: 1}}>
                    <Todo/>
                </SafeAreaView>
            </Provider>
        )
    }
}

export default App;