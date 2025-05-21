import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = [
  ];
  const element = useRoutes(routes);
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            WEB501-ECMA
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Product List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Product Add
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-2">{element}</div>
      <Toaster />
    </main>
  );
}

export default App;
