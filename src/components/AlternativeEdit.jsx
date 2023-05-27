import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AlternativeEdit = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ubah Alternatif</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="" className="input-alternative">
          Nama Alternatif
        </label>
        <input type="text" className="input-alternative" placeholder="Nama" /> <br />
        <label htmlFor="" className="input-alternative">
          Kriteria 1
        </label>
        <input type="number" className="input-alternative" placeholder="Kriteria 1" max={5} min={1} /> <br />
        <label htmlFor="" className="input-alternative">
          Kriteria 2
        </label>
        <input type="number" className="input-alternative" placeholder="Kriteria 2" max={5} min={1} /> <br />
        <label htmlFor="" className="input-alternative">
          Kriteria 3
        </label>
        <input type="number" className="input-alternative" placeholder="Kriteria 3" max={5} min={1} /> <br />
        <label htmlFor="" className="input-alternative">
          Kriteria 4
        </label>
        <input type="number" className="input-alternative" placeholder="Kriteria 4" max={5} min={1} /> <br />
        <label htmlFor="" className="input-alternative">
          Kriteria 5
        </label>
        <input type="number" className="input-alternative" placeholder="Kriteria 5" max={5} min={1} /> <br />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" className="fill-button" onClick={handleClose}>
          Ubah Alternatif
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
