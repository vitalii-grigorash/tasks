import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { commentReducer } from "./commentReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    comment: commentReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>
