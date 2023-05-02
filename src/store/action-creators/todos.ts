import axios from "axios";
import { Dispatch } from "redux";
import { TodoActionType, TodosAction, ITodo } from "../../types/todos";

export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {

            dispatch({
                type: TodoActionType.FETCH_TODOS
            })

            const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');

            dispatch({
                type: TodoActionType.FETCH_TODOS_SUCCESS,
                payload: data
            })

        } catch (err) {
            dispatch({
                type: TodoActionType.FETCH_TODOS_ERROR,
                payload: 'Ошибка при загрузке списка дел'
            })
        }
    }
}

export const handleComplited = (id: number) => {
    return (dispatch: Dispatch<TodosAction>) => {
        dispatch({
            type: TodoActionType.HANDLE_TODO_COMPLITED,
            payload: id
        })
    }
}