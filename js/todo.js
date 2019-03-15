import React,{Component} from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import {connect} from "react-redux";
import { addTodo, addingTodo } from "./actions";
import TodoList from "./todolist";

class Todo extends Component{
    constructor(props){
        super(props);
    }

    onSubmit = () => {
        if(this.props.addingTodo){
            this.props.dispatch(addTodo(this.props.addingTodo));
            this.props.dispatch(addingTodo(""));
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.input}>
                    <View style = {styles.input_border}>
                        <TextInput
                            value = {this.props.addingTodo}
                            onChangeText = {text => this.props.dispatch(addingTodo(text))}
                            style = {styles.input_input}/>
                    </View>
                    <TouchableOpacity onPress = {_ => this.onSubmit()} style = {styles.input_submit}><Text style = {styles.input_submit_text}>确定</Text></TouchableOpacity>
                </View>
                <TodoList/>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        addingTodo: state.addingTodo
    }
}

export default connect(mapStateToProps)(Todo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    input: {
        height: 44,
        paddingHorizontal: 15,
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 20
    },
    input_border: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#ccc",
        borderRadius: 4,
        flex: 1,
        overflow: "hidden"
    },
    input_input: {
        height: 44,
        paddingVertical:2,
        paddingHorizontal:10,
        textAlignVertical: "center",
        marginRight: 10
    },
    input_submit: {
        height: 44,
        width: 80,
        marginLeft: 10,
        backgroundColor: "green",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    input_submit_text: {
        color: "#fff"
    }
})
