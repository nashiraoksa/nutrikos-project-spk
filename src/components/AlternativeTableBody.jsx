import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export const AlternativeTableBody = ({ row, nama, value }) => {
  return (
    <tr>
      <td>{row}</td>
      <td>{nama}</td>
      <td>{value}</td>
      <td>
        <EditButton text="Edit"></EditButton>
        <DeleteButton text="Delete"></DeleteButton>
      </td>
    </tr>
  );
};
