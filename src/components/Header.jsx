import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export const Header = () => {
  const [user] = useAuthState(auth);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <header className="App-header">
      <Navbar className="fixed-top App-header" expand="lg">
        <Container>
          <Link to={'/'} className="App-title ">
            NutriKos
          </Link>
          <Nav className="me-auto">
            <Link to={'/'} className="App-navigation">
              Home
            </Link>
            <Link to={'/DSS'} className="App-navigation">
              DSS
            </Link>
          </Nav>
          {!user ? (
            <Nav>
              <Link to={'/login'} className="App-navigation">
                Login
              </Link>
              <Link to={'/signUp'} className="App-navigation">
                Sign Up
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img src={user?.photoURL || 'https://i.ibb.co/dcqtTqN/user.png'} alt="" width="40" height="40" className="profile-pic"></img>
                  {user?.displayName || user?.email}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" onClick={logOut}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}
        </Container>
      </Navbar>
    </header>
  );
};
