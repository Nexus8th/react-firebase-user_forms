import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ReactComponent as UserIcon } from './../images/person-circle.svg'

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
        <div className="d-flex align-items-center justify-content-center w-100" style={{minHeight:'100vh'}}>
            <Card style={{ maxWidth: "400px", minWidth:"300px", backgroundColor:'#EBEBEB', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                    <Card.Body>
                        <div className="mt-2 mb-0" style={{color:'#009688'}}><UserIcon style={{width:'130px', height:'150px'}}/>
                        </div>
                        <h2 className="text-center mb-0 mt-3" style={{color:'#00675B', fontWeight:'400'}}>S'inscrire</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                        <Form.Group id="username">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="mb-0 rounded-pill border-2" type="username" placeholder="Votre nom de profil" required ref={usernameRef}/>
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="mb-0 rounded-pill border-2" type="email" placeholder="Votre e-mail" required ref={emailRef}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="mb-0 rounded-pill border-2" type="password" placeholder="Mot de passe" required ref={passwordRef}/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="mb-0 rounded-pill border-2" type="password" placeholder="Confirmez mot de passe" required ref={confirmPasswordRef}/>
                            </Form.Group>
                            <div className="w-100 mt-2" style={{color:'#97380C', fontSize:'12px',}}>Déjà inscrit? <Link to="/login" style={{color:'#97380C', fontSize:'12px',}}>S'identifier</Link>
                            </div>
                            <Button disabled={loading} style={{backgroundColor:'#009688', borderColor:'#009688'}} className="w-100 rounded-pill mt-5" type="submit">Valider</Button>
                            <p className="mt-4 mb-0" style={{color:'#97380C', fontSize:'12px',}}>Informations légales</p>
                        </Form>
                    </Card.Body>
            </Card>
        </div>
        </>
    );
};

export default Signup;