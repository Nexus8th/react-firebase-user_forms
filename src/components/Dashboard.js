import { Button, Card, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as UserIcon } from './../images/person-circle.svg'

export default function Dashboard() {

    const { currentUser, logout, deleteAccount } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleLogout () {
        setError('');
        try {
            await logout();
            navigate('/login');
        } catch {
            setError('Erreur lors de la déconnexion');
        }
    }

    async function handleDelete () {
        setError('');
        try {
            await deleteAccount();
            navigate('/signup');
        } catch {
            setError('Erreur lors de la suppression de votre compte');
        }
    }

    function handleUpdate(e) {
        e.preventDefault();
        navigate('/update-profile');
    }
    
    return (
        <>
        <div className="d-flex align-items-center justify-content-center w-100" style={{minHeight:'100vh'}}>
            <Card style={{ maxWidth: "400px", backgroundColor:'#EBEBEB', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                    <Card.Body>
                        <div className="mt-3" style={{color:'#009688'}}><UserIcon style={{width:'130px', height:'150px'}}/>
                        </div>
                        <h2 className="text-center mb-4 mt-4" style={{color:'#00675B', fontWeight:'400'}}>Profil</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div style={{color:'#009688'}} className="w-100 text-center mt-2">
                            <strong>Email: &nbsp;</strong>{currentUser.email}
                        </div>
                        <div style={{color:'#009688'}} className="w-100 text-center mt-2">
                            <strong>Pseudo: &nbsp;</strong>{currentUser.pseudo}
                        </div>
                        <Button onClick={handleUpdate} className="w-100 mt-5 rounded-pill" type="submit" style={{backgroundColor:'#009688', borderColor:'#009688'}}>Modifier le profil</Button>
                        <Button onClick={handleLogout} className="w-100 mt-3 rounded-pill" type="submit" style={{backgroundColor:'white', borderColor:'#009688', color:'#009688'}}>Se déconnecter</Button>
                        <Button onClick={handleDelete} className="w-100 mt-5 rounded-pill" type="submit" style={{backgroundColor:'crimson', borderColor:'crimson'}}>Supprimer le profil</Button>
                    </Card.Body>
            </Card>
        </div>
        </>
    );
}
