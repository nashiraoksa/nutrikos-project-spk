import { MDBFooter } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footer">
      <div className="text-center p-3 footer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright: <b>NutriKos Project</b>
      </div>
    </MDBFooter>
  );
};
