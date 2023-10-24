import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SubscribeModal=()=> 
{
  const d=new Date();
  const today=d.getMinutes();
  const [show, setShow] = useState(false);

  const handleClose = () => 
  {
  setShow(false);
  localStorage.setItem('day',today);
  }
  
  useEffect(
  ()=>
  {
  if(parseInt(today)===parseInt(localStorage.getItem('day')))
  {
 
  }

  else
  {
  setShow(true);
  localStorage.setItem('day',today);
 
  }
  },[today])
  



  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubscribeModal;