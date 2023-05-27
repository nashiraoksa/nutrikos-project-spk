import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AlternativeInput = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" placeholder="Nama" />
        <input type="number" placeholder="Kriteria 1" max={5} min={1} />
        <input type="number" placeholder="Kriteria 2" max={5} min={1} />
        <input type="number" placeholder="Kriteria 3" max={5} min={1} />
        <input type="number" placeholder="Kriteria 4" max={5} min={1} />
        <input type="number" placeholder="Kriteria 5" max={5} min={1} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// <input type="text" placeholder="Nama" />
//       <input type="number" placeholder="Kriteria 1" max={5} />
//       <input type="number" placeholder="Kriteria 2" max={5} />
//       <input type="number" placeholder="Kriteria 3" max={5} />
//       <input type="number" placeholder="Kriteria 4" max={5} />
//       <input type="number" placeholder="Kriteria 5" max={5} />
//   <Button>Tambah</Button>
