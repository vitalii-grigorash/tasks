import axios from "axios";
import { Dispatch } from "redux";
import { CommentActionType, IComment, CommentAction } from "../../types/comment";

export const fetchComments = () => {
    return async (dispatch: Dispatch<CommentAction>) => {
        try {

            dispatch({
                type: CommentActionType.FETCH_COMMENTS
            })

            const { data } = await axios.get<IComment[]>('https://jsonplaceholder.typicode.com/comments?_limit=10');

            dispatch({
                type: CommentActionType.FETCH_COMMENTS_SUCCESS,
                payload: data
            })

        } catch (err) {
            dispatch({
                type: CommentActionType.FETCH_COMMENTS_ERROR,
                payload: 'Ошибка при загрузке комментариев'
            })
        }
    }
}
