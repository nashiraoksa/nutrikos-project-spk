import Button from 'react-bootstrap/Button';
import { BsFillTrashFill } from 'react-icons/bs';

export const MatrixBody = ({ id, nama, c1, c2, c3, c4, c5, c6, handleDelete }) => {
  return (
    <tr>
      <td></td>
      <td>{nama}</td>
      <td>{c1}</td>
      <td>{c2}</td>
      <td>{c3}</td>
      <td>{c4}</td>
      <td>{c5}</td>
      <td>{c6}</td>
      <td>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          <BsFillTrashFill></BsFillTrashFill>
        </Button>
      </td>
    </tr>
  );
};
