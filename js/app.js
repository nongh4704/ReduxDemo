'use strict';

import React, {Component} from "react";
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
                <Todo/>
            </Provider>
        )
    }
}

export default App;