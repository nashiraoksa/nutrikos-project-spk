import Button from 'react-bootstrap/Button';

function DeleteButton(props) {
  return (
    <Button variant="danger" className="delete-button">
      {props.text}
    </Button>
  );
}

export default DeleteButton;
