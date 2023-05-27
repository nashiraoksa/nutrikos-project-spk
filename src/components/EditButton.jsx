import Button from 'react-bootstrap/Button';

function DeleteButton(props) {
  return (
    <Button variant="warning" className="edit-button">
      {props.text}
    </Button>
  );
}

export default DeleteButton;
