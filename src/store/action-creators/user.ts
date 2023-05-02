import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes, IUser } from "../../types/user"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            
            dispatch({
                type: UserActionTypes.FETCH_USERS
            })

            const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: data
            })

        } catch (err) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Ошибка при получении пользователей с API'
            })
        }
    }
}