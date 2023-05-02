import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import UserList from "../UserList/UserList";
import Comments from "../Comments/Comments";
import Todos from "../Todos/Todos";

const App: React.FC = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (

    <div className="app">

      <Header />

      <Routes>

        <Route path={'/comments'}
          element={<Comments />}
        />

        <Route path={'/users'}
          element={<UserList />}
        />

        <Route path={'/todos'}
          element={<Todos />}
        />

      </Routes>

    </div>

  );

}

export default App;
