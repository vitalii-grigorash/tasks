import * as UserActionCreators from './user';
import * as CommentActionCreators from './comment';
import * as TodoActionCreators from './todos';

export default {
    ...UserActionCreators,
    ...CommentActionCreators,
    ...TodoActionCreators
}