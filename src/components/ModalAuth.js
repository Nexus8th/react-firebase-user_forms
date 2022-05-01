import { useState } from "react";
import { Modal } from "react-bootstrap";
import Login from "./Login";
import { ReactComponent as UserIcon } from './../images/person-circle.svg'


function ModalAuth() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <a variant="primary" onClick={handleShow} href=" #">
        <UserIcon style={{color:'white', width:'20px', cursor:'pointer'}}/>
        </a>
        <Modal show={show} onHide={handleClose} className="d-flex m-0 p-0">
          <Login/>
        </Modal>
      </>
    );
}

export default ModalAuth