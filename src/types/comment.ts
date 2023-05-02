export enum CommentActionType {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface CommentState {
    comments: IComment[],
    loading: boolean,
    error: null | string
}

interface FetchCommentsAction {
    type: CommentActionType.FETCH_COMMENTS;
}

interface FetchCommentsSuccessAction {
    type: CommentActionType.FETCH_COMMENTS_SUCCESS;
    payload: IComment[];
}

interface FetchCommentsErrorAction {
    type: CommentActionType.FETCH_COMMENTS_ERROR;
    payload: string;
}

export type CommentAction =
    FetchCommentsAction |
    FetchCommentsSuccessAction |
    FetchCommentsErrorAction;