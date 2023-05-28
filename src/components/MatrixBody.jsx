import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { Button } from 'react-bootstrap';

export const MatrixBody = ({ id, nama, c1, c2, c3, c4, c5, handleDelete }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nama}</td>
      <td>{c1}</td>
      <td>{c2}</td>
      <td>{c3}</td>
      <td>{c4}</td>
      <td>{c5}</td>
      <td>
        <EditButton text="Edit"></EditButton>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
