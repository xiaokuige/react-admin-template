import {DEL_TODO_ITEM,CHANGE_TODO_ITEM,ADD_TODO_ITEM} from "./actionTypes";
//默认的数据
const defaultState = {
    todos:[
        {id:1, title:'看一小时React的课程',finished:false},
        {id:2, title:'看一小时台球',finished:false},
        {id:3, title:'看一小时Java的课程',finished:false},
        {id:4, title:'看一小时Python的课程',finished:false},
    ],
    finishedCount: 0
}
export default (state = defaultState,action)=>{
    console.log(state,action);
    //1.删除一条todo
    if(action.type === DEL_TODO_ITEM){
        // debugger
        const  newState = JSON.parse(JSON.stringify(state))
        //1.1遍历
        let finishedCount = 0;
        newState.todos.forEach((todo, index) => {
            if (todo.id === action.todoId) {
                newState.todos.splice(index, 1);
            }
        });

        //1.2处理选中的
        newState.todos.forEach((todo,index) =>{
            if(todo.finished){
                finishedCount +=1;
            }
        })

        //1.3更新状态
        newState.finishedCount = finishedCount;
        return newState;
    }
    //2.修改一条记录
    if(action.type === CHANGE_TODO_ITEM){
        const  newState = JSON.parse(JSON.stringify(state))
        //2.1遍历
        let finishedCount = 0;
        newState.todos.forEach((todo, index) => {
            if (todo.id == action.todoId) {
                todo.finished = action.isFinished;
            }
            if (todo.finished) {
                finishedCount += 1;
            }
        });

        //2.2返回一个新的数据状态
        newState.finishedCount = finishedCount
        return newState;
    }
    //3.添加一条记录
    if(action.type === ADD_TODO_ITEM){
        const  newState = JSON.parse(JSON.stringify(state))
        newState.push(todo);
        return newState
    }
    return state;
}