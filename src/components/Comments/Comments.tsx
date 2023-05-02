import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypesSelector } from "../../hooks/useTypedSelector";

const Comments: React.FC = () => {

    const { comments, loading, error } = useTypesSelector(state => state.comment);

    const { fetchComments } = useActions();

    useEffect(() => {
        fetchComments();
    }, [])

    return (
        <div className="comments">
            {loading ? (
                <h1>Идет загрузка...</h1>
            ) : (
                <>
                    {error ? (
                        <h1>{error}</h1>
                    ) : (
                        <div className="comments__container">
                            {comments.map((comment) => (
                                <div key={comment.id} className="comments__message-container">
                                    <p className="comments__name">{comment.name}</p>
                                    <p className="comments__email"><span className="comments__span">Email:</span>{comment.email}</p>
                                    <p className="comments__message"><span className="comments__span">Comment:</span>{comment.body}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Comments;
