import {Navbar, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cinemaLogo from '../logo/Cinema.svg'

const Header = ({props}) => (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand >
            <img src={cinemaLogo} className="d-inline-block align-top"/>
            Movies<Navbar.Brand size='xl'>Hub</Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Brand>{props.total_results} Movies in DataBase</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Button variant='outline-light'>More on TMDB</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Header