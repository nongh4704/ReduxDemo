import React,{Component} from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    FlatList
} from "react-native";
import {connect} from "react-redux";

class TodoList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        <FlatList
            data = {this.props.todoList}
            />
    }
}

function mapStateToProps(state){
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps)(TodoList);

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
