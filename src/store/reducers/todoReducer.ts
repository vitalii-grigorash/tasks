import { TodoState, TodosAction, TodoActionType, ITodo } from "../../types/todos"

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null
}

export const todoReducer = (state = initialState, action: TodosAction): TodoState => {
    switch (action.type) {
        case TodoActionType.FETCH_TODOS:
            return {
                todos: [],
                loading: true,
                error: null
            }
        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {
                todos: action.payload,
                loading: false,
                error: null
            }
        case TodoActionType.FETCH_TODOS_ERROR:
            return {
                todos: [],
                loading: false,
                error: action.payload
            }
        case TodoActionType.HANDLE_TODO_COMPLITED:
            const todo: ITodo | undefined = state.todos.find(todo => todo.id === action.payload);
            if (todo !== undefined) {
                todo.completed = !todo.completed;
                const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
                const updatedTodos: ITodo[] = [
                    ...state.todos.slice(0, todoIndex),
                    todo,
                    ...state.todos.slice(todoIndex + 1)
                ]
                return {
                    ...state,
                    todos: updatedTodos
                }
            } else {
                return {
                    ...state
                }
            }

        default:
            return state
    }
}