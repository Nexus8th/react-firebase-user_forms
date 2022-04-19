import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UpdateProfile = () => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Mots de passe différents');
        } 

        const promises = [];
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value !== currentUser.password) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            navigate('/');
        }) 
        .catch (() => {
            setError('Erreur lors de la modification de votre compte');
        })
        .finally (() => {
            setLoading(false);
        }
        );
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Modifier le profil</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <Form.Group id="username">
                        <Form.Label>Pseudo</Form.Label>
                        <Form.Control className="mb-3" type="username" placeholder="Entrez votre pseudo" required ref={usernameRef}/>
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="mb-3" type="email" placeholder="Entrez votre email" required defaultValue={currentUser.email} ref={emailRef}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control className="mb-3" type="password" placeholder="Entrez votre mot de passe" ref={passwordRef}/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirmer le mot de passe</Form.Label>
                        <Form.Control className="mb-3" type="password" placeholder="Entrez votre mot de passe" ref={confirmPasswordRef}/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Mettre à jour</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to="/">Annuler</Link>
        </div>
        </>
    );
};

export default UpdateProfile;