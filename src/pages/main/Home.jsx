import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container className="conts">
      <Row>
        <Col className="col">
          <div className="welcome">
            <h1 className="home-title"> NutriKos</h1>
            <p>Sistem pendukung keputusan yang dapat membantu memilih gaya hidup dan menentukan kebutuhan nutrisi anak kos.</p>
            <Link to={'/guide'}>
              <button className="ghost-button home-button">Tutorial</button>
            </Link>
            <Link to={'/DSS'}>
              <button className="fill-button home-button">Mulai Menggunakan</button>
            </Link>
          </div>
        </Col>
        <Col className="col">
          <img src="https://i.ibb.co/5WRgX57/HD.png" alt="HD" border="0" className="home-img"></img>
        </Col>
      </Row>
    </Container>
  );
};

// <img src="https://i.ibb.co/stLcVXv/lum3n-RYq-O8-Dh-Pg68-unsplash-Photo-Room-png-Photo-Room.png" className="home-img" alt="" border="0"></img>
