import { Button, Card, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

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
    
    return (
        <>
            <Card className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card.Body>
                        <h2 className="text-center mb-4">Profil</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="w-100 text-center mt-2">
                            <strong>Email: &nbsp;</strong>{currentUser.email}
                        </div>
                        <div className="w-100 text-center mt-2">
                            <strong>Pseudo: &nbsp;</strong>{currentUser.pseudo}
                        </div>
                        <div className="w-100 text-center mt-2">
                            <Link to="/update-profile" className="btn btn-primary mt-3">Modifier le profil</Link>
                        </div>
                        <div className="w-100 text-center mt-2">
                            <Button variant="primary" onClick={handleLogout}>Se déconnecter</Button>
                        </div>
                        <div className="w-100 text-center mt-2">
                            <Button variant="danger" onClick={handleDelete}>Supprimer le compte</Button>
                        </div>
                    </Card.Body>  
                </div>
            </Card>
        </>
    );
}
