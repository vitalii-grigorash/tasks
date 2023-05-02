import { CommentAction, CommentState, CommentActionType } from "../../types/comment";

const initialState: CommentState = {
    comments: [],
    loading: false,
    error: null
}

export const commentReducer = (state = initialState, action: CommentAction): CommentState => {
    switch (action.type) {
        case CommentActionType.FETCH_COMMENTS:
            return {
                comments: [],
                loading: true,
                error: null
            }
        case CommentActionType.FETCH_COMMENTS_SUCCESS:
            return {
                comments: action.payload,
                loading: false,
                error: null
            }
        case CommentActionType.FETCH_COMMENTS_ERROR:
            return {
                comments: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
