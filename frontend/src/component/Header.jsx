import { Outlet, useNavigate } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../AuthContext";
const Header = () => {
  const {user, logout} = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/");
  }
  return (
    <>
      <header className="header">
        <div className="logo">Todos App</div>
        <nav className="nav-buttons">
        {user ? (
            <button className="button" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <>
              <button
                className="button"
                onClick={() => navigate("/auth?form=login")}
              >
                Login
              </button>
              <button
                className="button"
                onClick={() => navigate("/auth?form=signup")}
              >
                Signup
              </button>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
