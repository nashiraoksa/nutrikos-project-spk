import Table from 'react-bootstrap/Table';
import RANKING from '../utils/RANKING.json';
import { ResultBody } from './ResultBody';

export const ResultTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nama Alternatif</th>
          <th>Hasil Perhitungan</th>
          <th>Ranking</th>
        </tr>
      </thead>
      <tbody>
        {RANKING.map((data) => (
          <ResultBody nama={data.nama} hasil={data.hasil} ranking={data.ranking}></ResultBody>
        ))}
      </tbody>
    </Table>
  );
};
