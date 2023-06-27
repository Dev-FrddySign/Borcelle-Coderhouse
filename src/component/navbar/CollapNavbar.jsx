import './CollapNavbar.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import logotipo from '../../assets/img/logo y banner/logotipo.jpg';
import Location from '../iconlocation/IconLocation';
import { NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import User from '../UserIcon/User';

const CollapNavbar = () => {
  const titleStyle = {
    color: 'white',
    fontSize: '20px',
  };
  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className='navbar'>
          <Container>
            <NavLink to="/">
                <img className='logotipo' src={logotipo} alt="logo-cafeteria" />
            </NavLink>
            <span className='name-pag-shop'>Borcelle</span>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/Menu"><span className='name-pag'>Menu</span></Nav.Link>
                <Nav.Link as={NavLink} to="/Rewards" ><span className='name-pag'>Rewards</span></Nav.Link>
                <NavDropdown title={<span style={titleStyle}>Informacion</span>} id="collasible-nav-dropdown" className='title-dropdown'>
                  <NavDropdown.Item as={NavLink} to="/Cafe"><span className='name-dropdown'>Cafe</span></NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Gift" >
                  <span className='name-dropdown'>Gift</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Contacto" ><span className='name-dropdown'>Contacto</span></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/Nosotros">
                  <span className='name-dropdown'>Nosotros</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <div className="video-container">
                  <video autoPlay loop muted>
                    <source src={require('../../assets/img/video/video.mp4')} type="video/mp4" />
                  </video>
                </div>
                <Location />
                <Nav.Link>
                  <CartWidget/>
                </Nav.Link>
                <Nav.Link>
                  <User/>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div >
    </>
  );
}

export default CollapNavbar;