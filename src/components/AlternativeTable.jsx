import Table from 'react-bootstrap/Table';
import MOCK_DATA from '../utils/MOCK_DATA.json';
import { AlternativeTableBody } from './AlternativeTableBody';

export const AlternativeTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Alternatif</th>
            <th>Value</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_DATA.map((data) => (
            <AlternativeTableBody row={data.id} nama={data.nama_alternatif} value={data.kriteria.c1}></AlternativeTableBody>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
