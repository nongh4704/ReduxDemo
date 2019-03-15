import React,{Component} from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import {connect} from "react-redux";
import { addTodo } from "./actions";

class Todo extends Component{
    constructor(props){
        super(props);
    }

    onChangeText = (text) => {
        this.text = text;
    }

    onSubmit = () => {
        if(this.text){
            this.props.dispatch(addTodo(this.text))
        }
    }

    render(){
        <View style = {styles.container}>
            <View style = {styles.input}>
                <TextInput 
                    onChangeText = {this.onChangeText}
                    style = {styles.input_input}/>
                <TouchableOpacity onPress = {_ => this.onSubmit()} style = {styles.input_submit}><Text style = {styles.input_submit_text}>确定</Text></TouchableOpacity>
            </View>
            <TodoList/>
        </View>
    }
}

export default connect()(Todo)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 44,
        paddingHorizontal: 15,
        flexDirection: "row",
        marginBottom: 20
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
