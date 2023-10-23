import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
	return (
		<div>
			<Navbar className="mt-4 mb-4 rounded " bg="primary" variant="dark">
				<Container>
					<Navbar.Brand as={NavLink} to="/">
						Blogg.app
					</Navbar.Brand>
					<Nav>
						<Nav.Link as={NavLink} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/about">
							About
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
