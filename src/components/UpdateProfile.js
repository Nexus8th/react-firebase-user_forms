import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ReactComponent as UserIcon } from './../images/person-circle.svg'

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
            navigate('/dashboard');
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
        <div className="d-flex align-items-center justify-content-center w-100" style={{minHeight:'100vh'}}>
            <Card style={{ maxWidth: "400px", backgroundColor:'#EBEBEB', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                    <Card.Body>
                        <div className="mt-3" style={{color:'#009688'}}><UserIcon style={{width:'130px', height:'150px'}}/>
                        </div>
                        <h2 className="text-center mb-4 mt-3" style={{color:'#00675B', fontWeight:'400'}}>Modifier le profil</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                        <Form.Group id="username">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="rounded-pill border-2 mt-0 mb-0" type="username" placeholder="Entrez votre pseudo" required ref={usernameRef}/>
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="rounded-pill border-2 mt-0 mb-0" type="email" placeholder="Entrez votre email" required defaultValue={currentUser.email} ref={emailRef}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="rounded-pill border-2 mt-0 mb-0" type="password" placeholder="Entrez votre mot de passe" ref={passwordRef}/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label></Form.Label>
                                <Form.Control style={{borderColor:'#009688'}} className="rounded-pill border-2 mt-0 mb-5" type="password" placeholder="Entrez votre mot de passe" ref={confirmPasswordRef}/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-0 rounded-pill" type="submit" style={{backgroundColor:'#009688', borderColor:'#009688'}}>Mettre à jour</Button>
                            <Button disabled={loading} className="w-100 mt-3 rounded-pill" type="submit" style={{backgroundColor:'#009688', borderColor:'#009688'}}><Link to="/dashboard" style={{textDecoration:'none', color:'white'}} >Annuler</Link></Button>
                        </Form>
                    </Card.Body>
            </Card>
        </div>
        </>
    );
};

export default UpdateProfile;