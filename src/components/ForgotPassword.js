import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ReactComponent as UserIcon } from './../images/person-circle.svg'

const ForgotPassword = () => {

    const emailRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


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

    function handleLogin(e) {
        e.preventDefault();
        navigate('/login');
    }

    function handleSignUp(e) {
        e.preventDefault();
        navigate('/signup');
    }

    return (
        <>
        <div className="d-flex align-items-center justify-content-center w-100" style={{minHeight:'100vh'}}>
            <Card style={{ maxWidth: "400px", minWidth:"300px", backgroundColor:'#EBEBEB', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                    <Card.Body>
                        <div className="mt-3" style={{color:'#009688'}}><UserIcon style={{width:'130px', height:'150px'}}/></div>
                        <h2 className="text-center mb-3 mt-3" style={{color:'#00675B', fontWeight:'400'}}>Reset <br/> mot de passe</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="mb-0 rounded-pill border-2" type="email" placeholder="Entrez votre e-mail" required ref={emailRef}/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 rounded-pill mt-5" type="submit" style={{backgroundColor:'#009688', borderColor:'#009688'}}>Reset</Button>
                            <Button onClick={handleLogin} disabled={loading} type="submit" className="w-100 rounded-pill text-center mt-4" style={{backgroundColor:'white', borderColor:'#009688', color:'#009688'}}>Se connecter</Button>
                            <Button onClick={handleSignUp} disabled={loading} type="submit" className="w-100 rounded-pill text-center mt-2" style={{backgroundColor:'white', borderColor:'#009688', color:'#009688'}}>S'inscrire</Button>
                            <p className="mt-5 mb-0" style={{color:'#97380C', fontSize:'12px',}}>Informations légales</p>
                        </Form>
                    </Card.Body>
            </Card>
        </div>
        </>
    );
};

export default ForgotPassword;
