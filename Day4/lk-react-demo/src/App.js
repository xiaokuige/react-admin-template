import React, {Component} from 'react';
import Head from './components/Head'
import List from './components/List'
import Foot from './components/Foot'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, title: '看一小时React的课程', finished: false},
                {id: 2, title: '看一小时台球', finished: false},
                {id: 3, title: '看一小时Java的课程', finished: false},
                {id: 4, title: '看一小时Python的课程', finished: false},
            ],
            finishedCount: 0
        }
    }

    //1.修改完成状态
    changeTodoFished = (todoId, isFinished) => {

    };

    //2.删除一条记录
    removeTodoWithId = (todoId) => {

    }

    //3.添加一个todo
    addOneTodo = (todo) => {
        //3.1取出数组
        let tempTodos = this.state.todos;
        tempTodos.push(todo);
        //3.2更新状态
        this.setState({
            todos: tempTodos
        })
    }

    //4.删除已经完成的所有任务
    delCheckedTodo = () => {
        //4.1取出对象
        let tempTodos = this.state.todos;
        let tempArr = [];
        tempTodos.forEach((todo, index) => {
            if (todo.finished) {
                tempArr.push(todo);
            }
        });
        //4.2更新状态
        this.setState({
            todos: tempArr,
            finishedCount: 0
        })
    };

    //5.选中/取消所有
    dealSelectedAllTodo = (flag) => {
        //5.1遍历
        const tempTodos = this.state.todos;
        let finishedCount = 0;
        tempTodos.forEach((todo, index) => {
            todo.finished = flag;
        });
        //5.2处理选中的
        tempTodos.forEach((todo, index) => {
            if (todo.finished) {
                finishedCount += 1;
            }
        });
        //5.3更新状态
        this.setState({
            todos: tempTodos,
            finishedCount
        })
    }

    render() {
        const {todos, finishedCount,dealSelectedAllTodo} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/*头部*/}
                    <Head
                        lastTodoId={todos.length === 0 ? 0 : todos[todos.length - 1].id}
                        addOneTodo={this.addOneTodo}
                    />
                    {/*列表*/}
                    <List
                        todos={todos}
                        removeTodoWithId={this.removeTodoWithId}
                        changeTodoFinished={this.changeTodoFished}
                    />
                    {/*尾部*/}
                    <Foot
                        finishedCount={finishedCount}
                        totalCount={todos.length}
                        delCheckedTodo={this.delCheckedTodo}
                        dealSelectedAllTodo={this.dealSelectedAllTodo}
                    />
                </div>
            </div>
        )
    }
}

export default App
