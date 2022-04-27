import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Mots de passe différents');
        } 

        try {
            setError("");
            setLoading(true);
            await signup( emailRef.current.value, passwordRef.current.value)
            navigate('/dashboard')
        } catch {
            setError('Erreur lors de la création de votre compte');
        }
        setLoading(false);
        
    }
    return (
        <>
        <div className="d-flex align-items-center justify-content-center w-100">
            <Card style={{ maxWidth: "400px" }}>
                    <Card.Body>
                        <h2 className="text-center mb-4">Inscription</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                        <Form.Group id="username">
                                <Form.Label>Pseudo</Form.Label>
                                <Form.Control className="mb-3" type="username" placeholder="Entrez votre pseudo" required ref={usernameRef}/>
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="mb-3" type="email" placeholder="Entrez votre email" required ref={emailRef}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control className="mb-3" type="password" placeholder="Entrez votre mot de passe" required ref={passwordRef}/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Confirmer le mot de passe</Form.Label>
                                <Form.Control className="mb-3" type="password" placeholder="Entrez votre mot de passe" required ref={confirmPasswordRef}/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">S'inscrire</Button>
                        </Form>
                    </Card.Body>
            </Card>
        </div>
        <div className="w-100 text-center mt-2">
            Déjà un compte? <Link to="/login">Se connecter</Link>
        </div>
        </>
    );
};

export default Signup;