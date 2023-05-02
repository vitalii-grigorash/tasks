import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypesSelector } from "../../hooks/useTypedSelector";

const UserList: React.FC = () => {

    const { users, loading, error } = useTypesSelector(state => state.user);

    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="user-list">
            {loading ? (
                <h1>Идет загрузка...</h1>
            ) : (
                <>
                    {error ? (
                        <h1>{error}</h1>
                    ) : (
                        <>
                            {users.map((user) => (
                                <div key={user.id}>
                                    <p>{user.name}</p>
                                </div>
                            ))}
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default UserList;
