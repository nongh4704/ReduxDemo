import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Alert,
    TextInput,
    TouchableOpacity,
    Text,
    FlatList
} from "react-native";
import {connect} from "react-redux";
import {checkTodo, deleteTodo} from "./actions/index";

class TodoList extends Component{
    constructor(props){
        super(props);
    }

    onItemPress = (item, index) => {
        this.props.dispatch(checkTodo(index));
    }

    onItemLongPress = (item, index) => {
        Alert.alert(
            "删除项目",
            "确认要删除该项目吗?",
            [
                {text: "取消"},
                {text: "确认", onPress: () => this.props.dispatch(deleteTodo(index))}
            ]
        );
    }

    renderItem = ({item, index}) => {
        let color = "#333";
        if(item.ischecked){
            color = "#999";
        }
        
        return(
            <TouchableOpacity  
                onPress = {_ => this.onItemPress(item, index)}
                onLongPress = {_ => this.onItemLongPress(item, index)}
                style = {styles.item}>
                <View style = {styles.dot}/>
                <Text style = {[styles.item_content,{color, textDecorationLine: item.ischecked ? "line-through" : "none"}]}>{item.content}</Text>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
        return(
            <View style = {styles.separator}/>
        )
    }

    render(){
        return (
            <FlatList
                style = {{flex: 1}}
                data = {this.props.todoList}
                keyExtractor = {item => item.id+""}
                ItemSeparatorComponent = {this.renderSeparator}
                renderItem = {this.renderItem}/>
        )
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
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "green"
    },
    item: {
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        paddingHorizontal: 15
    },
    item_content: {
        flex: 1,
        marginLeft:10
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#ebebeb",
        marginLeft: 15
    }
})
