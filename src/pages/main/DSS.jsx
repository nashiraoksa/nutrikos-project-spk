// import BasicExample from '../../components/CriteriaTable';
// import { AlternativeTable } from '../../components/AlternativeTable';
import { FillButton } from '../../components/FillButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MatrixTable } from '../../components/MatrixTable';
import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AlternativeInput } from '../../components/AlternativeInput';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ResultTable } from '../../components/ResultTable';

export const DSS = () => {
  const [user] = useAuthState(auth);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <MatrixTable></MatrixTable>
            <AlternativeInput show={show} handleClose={handleClose}></AlternativeInput>
            <Button className="fill-button hitung" type="submit">
              Hitung
            </Button>
          </div>
          <div className="table-card">
            <h2 className="title-hasil">Hasil Perhitungan TOPSIS</h2>
            <ResultTable></ResultTable>
          </div>
        </>
      ) : (
        <h2>BELUM LOGIN</h2>
      )}
    </div>
  );
};

// <FillButton text="+ Alternatif"></FillButton>

// <div className="table-card">
//         <h2>Data Kriteria</h2>
//         <BasicExample></BasicExample>
//       </div>

// <div className="table-card">
//         <Container>
//           <Row>
//             <Col>
//               <h2>Data Alternatif</h2>
//             </Col>
//             <Col className="add-alternative">
//               <FillButton text="+ Alternatif"></FillButton>
//             </Col>
//           </Row>
//         </Container>
//         <AlternativeTable></AlternativeTable>
//       </div>
