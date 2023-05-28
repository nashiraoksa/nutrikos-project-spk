// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

export const AlternativeInput = ({ show, handleClose }) => {
  //   const navigate = useNavigate();

  const schema = yup.object().shape({
    nama: yup.string().required('Isikan nama alternatif.'),
    kriteria1: yup.number().positive().integer().min(1).max(5).required(),
    kriteria2: yup.number().positive().integer().min(1).max(5).required(),
    kriteria3: yup.number().positive().integer().min(1).max(5).required(),
    kriteria4: yup.number().positive().integer().min(1).max(5).required(),
    kriteria5: yup.number().positive().integer().min(1).max(5).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const alternativesRef = collection(db, 'alternatives');

  const onCreateAlternative = async (data) => {
    console.log(data);
    await addDoc(alternativesRef, {
      ...data,
      //   id: 'test',
    });
    // navigate('/DSS');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Alternatif</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" onSubmit={handleSubmit(onCreateAlternative)}>
          <label htmlFor="" className="input-alternative">
            Nama Alternatif
          </label>
          <input type="text" className="input-alternative" placeholder="Nama" {...register('nama')} /> <br />
          <label htmlFor="" className="input-alternative">
            Kriteria 1
          </label>
          <input type="number" className="input-alternative" placeholder="Kriteria 1" max={5} min={1} {...register('kriteria1')} /> <br />
          <label htmlFor="" className="input-alternative">
            Kriteria 2
          </label>
          <input type="number" className="input-alternative" placeholder="Kriteria 2" max={5} min={1} {...register('kriteria2')} /> <br />
          <label htmlFor="" className="input-alternative">
            Kriteria 3
          </label>
          <input type="number" className="input-alternative" placeholder="Kriteria 3" max={5} min={1} {...register('kriteria3')} /> <br />
          <label htmlFor="" className="input-alternative">
            Kriteria 4
          </label>
          <input type="number" className="input-alternative" placeholder="Kriteria 4" max={5} min={1} {...register('kriteria4')} /> <br />
          <label htmlFor="" className="input-alternative">
            Kriteria 5
          </label>
          <input type="number" className="input-alternative" placeholder="Kriteria 5" max={5} min={1} {...register('kriteria5')} /> <br />
          <input type="submit" className="fill-button" onClick={handleClose} />
        </form>
      </Modal.Body>
    </Modal>
  );
};

// await addDoc(alternativesRef, {
//     nama: data.nama,
//     kriteria1: data.kriteria1,
//     kriteria2: data.kriteria2,
//     kriteria3: data.kriteria3,
//     kriteria4: data.kriteria4,
//     kriteria5: data.kriteria5,
//     id: 'test'
// })

// <input type="text" placeholder="Nama" />
//       <input type="number" placeholder="Kriteria 1" max={5} />
//       <input type="number" placeholder="Kriteria 2" max={5} />
//       <input type="number" placeholder="Kriteria 3" max={5} />
//       <input type="number" placeholder="Kriteria 4" max={5} />
//       <input type="number" placeholder="Kriteria 5" max={5} />
//   <Button>Tambah</Button>

// <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Tutup
//         </Button>
//         <Button variant="primary" className="fill-button" onClick={handleClose}>
//           Tambah Alternatif
//         </Button>
//       </Modal.Footer>
