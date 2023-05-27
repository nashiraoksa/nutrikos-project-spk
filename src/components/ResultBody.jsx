export const ResultBody = ({ nama, hasil, ranking }) => {
  return (
    <tr>
      <td>{nama}</td>
      <td>{hasil}</td>
      <td>{ranking}</td>
    </tr>
  );
};
