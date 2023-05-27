import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { AlternativeEdit } from './AlternativeEdit';

function DeleteButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" className="edit-button" onClick={handleShow}>
        {props.text}
      </Button>

      <AlternativeEdit show={show} handleClose={handleClose}></AlternativeEdit>
    </>
  );
}

export default DeleteButton;
