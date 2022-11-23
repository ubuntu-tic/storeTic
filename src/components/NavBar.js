import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Cleaning StoreTic
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
          <li className="nav-item">
                            <Link className="btn btn-secondary my-2 my-sm-0" to="../pages/Login">iniciar sesion
                                <span className="visually-hidden">(current)</span>
                            </Link>
                            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="../components/ProductosAdmin"
              >
                Administrar Productos 💼
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="../components/MiComponente">
                Lista de Ventas 📈
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="../components/CarritoCompras"
              >
                Carrito Compras 🛒
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Buscar 🔍"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
