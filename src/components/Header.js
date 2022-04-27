import { ReactComponent as Logo } from './../images/Logo-blanc-H.svg';
import { ReactComponent as UserIcon } from './../images/person-circle.svg'

function Header() {

  return (
        <nav className="navbar navbar-expand-xl navbar-dark m-0 p-0 w-100 sticky-top" style={{ maxWidth: '100%', backgroundColor:'#00675B', minHeight:'100px'}}>
            <a className="navbar-brand" href="# ">
                <Logo style={{maxWidth:'270px', maxHeight:'80px', marginLeft:'90px'}}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar d-flex ms-auto me-5" >
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="# ">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="# ">Présentation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="# ">Nos prestations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="# ">Nos Produits</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="# ">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href=" #" tabIndex="-1" aria-disabled="true">x</a>
                            </li>
                        </ul>
                        <a className="navbar-icon" href=" #">
                            <UserIcon style={{color:'white', width:'20px'}}/>
                        </a>
                    </div>
                </div>
        </nav>
  )
}

export default Header