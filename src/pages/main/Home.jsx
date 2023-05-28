import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useState } from 'react';
import { CriteriaTableBody } from '../../components/CriteriaTableBody';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';

export const Home = () => {
  const [criteria, setCriteria] = useState(null);

  const criteriaRef = collection(db, 'criteria');

  const getCriteria = async () => {
    const criteriaData = await getDocs(criteriaRef);
    const data = criteriaData.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setCriteria(data);
  };

  useEffect(() => {
    getCriteria();
  }, []);

  return (
    <>
      <h1>HOME PAGE</h1>
      <div className="table-card">
        <h2>Data Kriteria</h2>
        <Table striped bordered hover className="matrix-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Kriteria</th>
              <th>Bobot</th>
              <th>Sifat</th>
            </tr>
          </thead>
          <tbody>
            {criteria?.map((data) => (
              <CriteriaTableBody nama={data.nama} bobot={data.bobot} sifat={data.sifat}></CriteriaTableBody>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
