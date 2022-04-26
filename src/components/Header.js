import logo from '../assets/Logo-blanc-H.svg';



function Header() {



  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="# ">
                <img alt="logo" src={logo}></img>
            </a>
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="# ">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="# ">Présentation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="# ">Nos Produits</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header