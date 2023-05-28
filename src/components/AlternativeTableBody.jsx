import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { Button } from 'react-bootstrap';

export const AlternativeTableBody = ({ row, nama, value, handleDelete }) => {
  return (
    <tr>
      <td>{row}</td>
      <td>{nama}</td>
      <td>{value}</td>
      <td>
        <EditButton text="Edit"></EditButton>
        <Button variant="danger" onClick={() => handleDelete()}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

// <DeleteButton text="Delete"></DeleteButton>
