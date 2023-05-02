import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypesSelector } from "../../hooks/useTypedSelector";

const Todos = () => {

    const { fetchTodos, handleComplited } = useActions();

    const { todos, loading, error } = useTypesSelector(state => state.todo);

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <div className="todos">
            {loading ? (
                <h1>Идёт загрузка...</h1>
            ) : (
                <>
                    {error ? (
                        <h1>{error}</h1>
                    ) : (
                        <>
                            {todos.map((todo) => (
                                <div className="todos__container" key={todo.id}>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleComplited(todo.id)}
                                        className="todos__checkbox"
                                    />
                                    <p className="todos__title">{todo.title}</p>
                                </div>
                            ))}
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Todos;