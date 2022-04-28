import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ReactComponent as UserIcon } from './../images/person-circle.svg'

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
            navigate('/dashboard')
        } catch {
            setError('Erreur lors de la connexion');
        }
        setLoading(false);
        
    }
    return (
        <>
        <div className="d-flex align-items-center justify-content-center w-100" style={{minHeight:'100vh'}}>
            <Card style={{ maxWidth: "400px", backgroundColor:'#EBEBEB', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                    <Card.Body>
                        <div className="mt-3" style={{color:'#009688'}}><UserIcon style={{width:'130px', height:'150px'}}/>
                        </div>
                        <h2 className="text-center mb-2 mt-4" style={{color:'#00675B', fontWeight:'400'}}>S'identifier</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="rounded-pill border-2" type="email" placeholder="Votre e-mail" required ref={emailRef}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="mb-3 rounded-pill border-2" type="password" placeholder="Votre mot de passe" required ref={passwordRef}/>
                            </Form.Group>
                            <div className="w-100 text-center mt-3 mb-5">
                                <Link to="/forgot-password" style={{color:'#97380C', fontSize:'12px', textDecoration:'none' }}>Mot de passe oublié?</Link>
                            </div>
                            <Button disabled={loading} className="w-100 mt-5 rounded-pill" type="submit" style={{backgroundColor:'#009688', borderColor:'#009688'}}>Valider</Button>
                            <p className="mt-4" style={{color:'#97380C', fontSize:'12px',}}>Informations légales</p>
                        </Form>
                    </Card.Body>
            </Card>
        </div>
        <div className="w-100 text-center mt-0">
            Nouveau membre? <Link to="/signup">S'inscrire</Link>
        </div>
        </>
    );
};

export default Login;