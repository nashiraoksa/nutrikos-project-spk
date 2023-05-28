import Table from 'react-bootstrap/Table';
// import DeleteButton from './DeleteButton';
// import TableBody from './CriteriaTableBody';
import { MatrixBody } from './MatrixBody';
import MOCK_DATA from '../utils/MOCK_DATA.json';

import React, { useEffect, useState } from 'react';

import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export const MatrixTable = () => {
  const [alternatives, setAlternatives] = useState([]);

  const alternativeData = async () => {
    const q = query(collection(db, 'alternatives'));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setAlternatives(data);
  };

  useEffect(() => {
    alternativeData();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}></th>
          <th colSpan={5}>Kriteria</th>
          <th></th>
        </tr>
        <tr>
          <th>No.</th>
          <th>Nama Alternatif</th>
          <th>C1</th>
          <th>C2</th>
          <th>C3</th>
          <th>C4</th>
          <th>C5</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {MOCK_DATA.map((data) => (
          <MatrixBody id={data.id} nama={data.nama_alternatif} handleDelete={handleDelete} c1={data.kriteria.c1} c2={data.kriteria.c2} c3={data.kriteria.c3} c4={data.kriteria.c4} c5={data.kriteria.c5}></MatrixBody>
        ))}
      </tbody>
    </Table>
  );
};
