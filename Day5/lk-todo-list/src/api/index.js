import ajax from './ajax'

//0.定义请求路径
const BASE_URL = '/api'

//1.请求todo列表
export const getTodoList = () =>ajax(BASE_URL + '/todos');