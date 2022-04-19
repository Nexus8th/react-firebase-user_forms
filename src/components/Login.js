import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Erreur lors de la connexion');
        }
        setLoading(false);
        
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Connexion</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="mb-3" type="email" placeholder="Entrez votre email" required ref={emailRef}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control className="mb-3" type="password" placeholder="Entrez votre mot de passe" required ref={passwordRef}/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Se connecter</Button>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Mot de passe oublié?</Link>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Nouveau membre? <Link to="/signup">S'inscrire</Link>
        </div>
        </>
    );
};

export default Login;