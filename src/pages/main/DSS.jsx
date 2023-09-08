// bootsrtap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// local component
import { AlternativeInput } from '../../components/AlternativeInput';
import { MatrixBody } from '../../components/MatrixBody';
import { ResultBody } from '../../components/ResultBody';
import { Footer } from '../../components/Footer';
// firebase
import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import React, { useState } from 'react';

export const DSS = () => {
  const [user] = useAuthState(auth);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ALTERNATIVES
  const [alternatives, setAlternatives] = useState(null);
  const alternativeRef = collection(db, 'alternatives');

  const getAlternative = async () => {
    const alternativeData = await getDocs(alternativeRef);
    setAlternatives(
      alternativeData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'alternatives', id));
  };

  useEffect(() => {
    getAlternative();
  }, []);

  const onDelete = (id) => {
    handleDelete(id);
    getAlternative();
  };

  const onInput = () => {
    handleClose();
    getAlternative();
  };

  // END

  // INFORMASI KRITERIA
  const weights = [0.286, 0.238, 0.095, 0.19, 0.143, 0.048];
  const criteriaTypes = [1, 1, -1, -1, 1, 1];
  // END

  // TOPSIS

  const getMatrixData = (data) => {
    const matrixData = [];

    data?.map((data) => {
      const criteriaData = [];
      criteriaData.push(data.kriteria1);
      criteriaData.push(data.kriteria2);
      criteriaData.push(data.kriteria3);
      criteriaData.push(data.kriteria4);
      criteriaData.push(data.kriteria5);
      criteriaData.push(data.kriteria6);

      matrixData.push(criteriaData);
    });
    return matrixData;
  };

  // mendapatkan matriks ternormalisasi
  const getNormalizedMatrix = (alternativesData) => {
    const matrix = getMatrixData(alternativesData);

    const normalizedMatrix = [];
    const columnCount = matrix[0].length;

    for (let i = 0; i < columnCount; i++) {
      let sum = 0;
      for (let j = 0; j < matrix.length; j++) {
        sum += matrix[j][i] * matrix[j][i];
      }
      const sqrtSum = Math.sqrt(sum);
      const normalizedColumn = matrix.map((row) => row[i] / sqrtSum);
      normalizedMatrix.push(normalizedColumn);
    }
    return normalizedMatrix;
  };

  // mendapatkan matriks terbobot ternormalisasi
  const getWeightedNormalizedMatrix = (normalizedMatrix, weights) => {
    const weightedMatrix = [];

    for (let i = 0; i < normalizedMatrix.length; i++) {
      const weightedColumn = normalizedMatrix[i].map((value) => value * weights[i]);
      weightedMatrix.push(weightedColumn);
    }

    return weightedMatrix;
  };

  // mendapatkan nilai ideal positif dan negatif
  const getIdealValues = (weightedMatrix, criteriaTypes) => {
    const idealPositive = [];
    const idealNegative = [];

    for (let i = 0; i < weightedMatrix.length; i++) {
      const column = weightedMatrix[i];
      const criterionType = criteriaTypes[i];

      if (criterionType === 1) {
        idealPositive.push(Math.max(...column));
        idealNegative.push(Math.min(...column));
      } else if (criterionType === -1) {
        idealPositive.push(Math.min(...column));
        idealNegative.push(Math.max(...column));
      }
    }

    return {
      idealPositive,
      idealNegative,
    };
  };

  // menghitung jarak alternatif terhadap ideal positif dan ideal negatif
  const getDistances = (weightedMatrix, idealPositive, idealNegative) => {
    const distances = [];

    for (let i = 0; i < weightedMatrix[0].length; i++) {
      let positiveSum = 0;
      let negativeSum = 0;

      for (let j = 0; j < weightedMatrix.length; j++) {
        positiveSum += (weightedMatrix[j][i] - idealPositive[j]) ** 2;
        negativeSum += (weightedMatrix[j][i] - idealNegative[j]) ** 2;
      }

      const positiveDistance = Math.sqrt(positiveSum);
      const negativeDistance = Math.sqrt(negativeSum);
      distances.push(negativeDistance / (positiveDistance + negativeDistance));
    }

    return distances;
  };

  const [rank, setRank] = useState([]);

  // mendapatkan ranking hasil
  const getRanking = (distances) => {
    const nama_alternatif = [];
    alternatives?.map((data) => nama_alternatif.push(data.nama));
    const ranking = distances.map((value, index) => ({ index: index + 1, value }));
    console.log(ranking, nama_alternatif);

    for (let i = 0; i < ranking.length; i++) {
      ranking[i].nama = nama_alternatif[i];
    }
    ranking.sort((a, b) => b.value - a.value);
    // console.log(ranking);
    setRank(ranking);
    return ranking;
  };

  const calculateTOPSIS = () => {
    const normalized = getNormalizedMatrix(alternatives);
    const weighted = getWeightedNormalizedMatrix(normalized, weights);
    const { idealPositive, idealNegative } = getIdealValues(weighted, criteriaTypes);
    const distance = getDistances(weighted, idealPositive, idealNegative);
    getRanking(distance);
  };

  // END TOPSIS

  return (
    <div>
      {user ? (
        <>
          <div className="table-card">
            <Container>
              <Row>
                <Col>
                  <h2>Nilai Matriks</h2>
                </Col>
                <Col>
                  <Button onClick={handleShow} className="fill-button add-alternative">
                    +Alternatif
                  </Button>
                </Col>
              </Row>
            </Container>

            <Table striped bordered hover className="matrix-table">
              <thead>
                <tr>
                  <th colSpan={2}></th>
                  <th colSpan={6} className="tab-mid">
                    Kriteria
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <th>No.</th>
                  <th>Nama Alternatif</th>
                  <th>Karbohidrat</th>
                  <th>Protein</th>
                  <th>Lemak</th>
                  <th>Penyedap Makanan</th>
                  <th>Aktivitas Fisik</th>
                  <th>Serat</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {alternatives?.map((data) => (
                  <MatrixBody id={data.id} nama={data.nama} handleDelete={onDelete} c1={data.kriteria1} c2={data.kriteria2} c3={data.kriteria3} c4={data.kriteria4} c5={data.kriteria5} c6={data.kriteria6}></MatrixBody>
                ))}
              </tbody>
            </Table>

            <Button
              className="fill-button hitung"
              onClick={() => {
                calculateTOPSIS();
              }}
            >
              Hitung
            </Button>

            <AlternativeInput show={show} handleClose={handleClose} handle={onInput}></AlternativeInput>
          </div>
          <div className="table-card">
            <h2 className="title-hasil">Hasil Perhitungan TOPSIS</h2>
            <Table striped bordered hover className="matrix-table">
              <thead>
                <tr>
                  <th>Ranking</th>
                  <th>Nama Alternatif</th>
                  <th>Hasil Perhitungan</th>
                </tr>
              </thead>
              <tbody>
                {rank.map((data) => (
                  <ResultBody nama={data.nama} hasil={data.value} ranking={data.index}></ResultBody>
                ))}
              </tbody>
            </Table>
          </div>
          <Footer></Footer>
        </>
      ) : (
        <div className="not-login">
          <h2>Silakan Login/Sign Up untuk dapat menggunakan fitur DSS.</h2>
        </div>
      )}
    </div>
  );
};
