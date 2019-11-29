import {DEL_TODO_ITEM,CHANGE_TODO_ITEM,ADD_TODO_ITEM} from "./actionTypes";
//1.删除一条记录
export const getDelitemAction = (todoId)=>({
    type:DEL_TODO_ITEM,
    todoId
})

//2.修改一些记录的状态
export const getChangeItemFinishedAction = (todoId,isFinished)=>({
    type: CHANGE_TODO_ITEM,
    todoId,
    isFinished
})

//3.添加一条记录
export const getAddItemAction =(todo)=>({
    type:ADD_TODO_ITEM,
    todo

})