import React,{Component} from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        <View style = {styles.container}>
            <View style = {styles.input}>
                <TextInput style = {styles.input_input}/>
                <TouchableOpacity style = {styles.input_submit}><Text style = {styles.input_submit_text}>确定</Text></TouchableOpacity>
                <TodoList/>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 44,
        paddingHorizontal: 15,
        flexDirection: "row",
    },
    input_input: {
        height: 44,
        flex: 1,
        paddingVertical:2,
        textAlignVertical: "center",
        marginRight: 10
    },
    input_submit: {
        height: 44,
        width: 80,
        backgroundColor: "green",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    input_submit_text: {
        color: "#fff"
    }
})
