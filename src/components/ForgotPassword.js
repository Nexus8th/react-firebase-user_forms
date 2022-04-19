import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword = () => {

    const emailRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();
    const [message, setMessage] = useState('');


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage('')
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value)
            setMessage('Un email de réinitialisation de mot de passe vient de vous être envoyé');
        } catch {
            setError('Erreur lors du reset de mot de passe');
        }
        setLoading(false);
        
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Reset mot de passe</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="mb-3" type="email" placeholder="Entrez votre email" required ref={emailRef}/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Reset</Button>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Se connecter</Link>
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

export default ForgotPassword;
