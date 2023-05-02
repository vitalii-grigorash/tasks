import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {

    const { pathname } = useLocation();

    return (
        <div className="header">
            <nav className="header__nav-container">
                <Link to={'/users'} className={`header__nav-link ${pathname === '/users' && 'header__nav-link_active'} `}>Users</Link>
                <Link to={'/comments'} className={`header__nav-link ${pathname === '/comments' && 'header__nav-link_active'} `}>Comments</Link>
                <Link to={'/todos'} className={`header__nav-link ${pathname === '/todos' && 'header__nav-link_active'} `}>Todos</Link>
            </nav>
        </div>
    );
}

export default Header;
