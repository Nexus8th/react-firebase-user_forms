import { ReactComponent as Logo } from './../images/Logo-blanc-H.svg';
import ModalAuth from './ModalAuth';

function Header() {

    return (
        <div className="w-100 m-0 p-0" style={{ maxWidth:'100%', minHeight:'auto', minWidth:'100%'}}>
            <nav className="navbar navbar-expand-xl sticky-top navbar-dark " style={{ minWidth: '100%', backgroundColor:'#00675B', minHeight:'100px', maxWidth:'100%'}}>
                <a className="navbar-brand" href="# ">
                    <Logo style={{maxWidth:'270px', maxHeight:'80px', marginLeft:'90px', minWidth:'270px'}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse">
                        <div className="navbar d-flex ms-auto me-5">
                            <ul className="navbar-nav mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="# ">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="# ">Présentation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="# ">Nos prestations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="# ">Nos Produits</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="# ">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href=" #" tabIndex="-1" aria-disabled="true">x</a>
                                </li>
                            </ul>
                            <ModalAuth/>
                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default Header