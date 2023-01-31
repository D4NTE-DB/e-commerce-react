import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'boxicons'
import ProductCard from './components/ProductCard'
import { useDispatch } from 'react-redux'
import { getProducts } from './store/slices/products.slice'


function App() {

  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <HashRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>
            <Navbar.Brand >e-Commerce</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                Login <box-icon name='user'>s</box-icon>
              </Nav.Link>
              {/* <Link to='/chd'>
                <Nav.Brand >Products</Nav.Brand>
              </Link> */}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chd' element={<ProductCard />} />
      </Routes>
    </HashRouter>
  )
}

export default App
