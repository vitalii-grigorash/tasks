export enum TodoActionType {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    HANDLE_TODO_COMPLITED = 'HANDLE_TODO_COMPLITED'
}

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodoState {
    todos: ITodo[],
    loading: boolean,
    error: null | string
}

interface FetchTodosAction {
    type: TodoActionType.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
    type: TodoActionType.FETCH_TODOS_SUCCESS;
    payload: ITodo[];
}

interface FetchTodosErrorAction {
    type: TodoActionType.FETCH_TODOS_ERROR;
    payload: string;
}
interface HandleTodoComplited {
    type: TodoActionType.HANDLE_TODO_COMPLITED;
    payload: number
}

export type TodosAction =
    FetchTodosAction |
    FetchTodosSuccessAction |
    FetchTodosErrorAction |
    HandleTodoComplited;