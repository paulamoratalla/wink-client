import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'

const Navigation = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Wink_</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        {
                            isLoggedIn
                                ?
                                <div className="nav-link" onClick={logOutUser}>Log out</div>
                                :
                                <>
                                    <NavLink to="/signup" className="nav-link">Sign up</NavLink>
                                    <NavLink to="/login" className="nav-link">Log in</NavLink>
                                </>
                        }

                        {
                            user && <NavLink to="/perfil" className="nav-link justify-content-end">Hello! {user.profileImg} {user.name}</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
