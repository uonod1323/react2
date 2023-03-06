import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">홍짱다이스키</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <div className="main-bg"></div>
        <Routes>
          <Route path="/" element={
            <>
              <div className="container">
                <div className="row">
                  <Card shoes={shoes}></Card>
                </div>
              </div>
            </>
          } />
          <Route path="/detail" element={
             <>
             <div className="container">
               <div className="row">
                 <Detail></Detail>
               </div>
             </div>
           </>
          } />

          <Route path="/about"  element={<About/>}>
            <Route path="/member"  element={<About/>}  />
            <Route path="/location"  element={<About/>}  />
          </Route>

        </Routes>

      </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
    </div>
  )
}

function Card(props){
  return(
    props.shoes.map(function(a,i){
      return(
        <div className="col-md-4">
          <img src= {`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" />
          <h4>{props.shoes[i].title}</h4>
          <p>{props.shoes[i].content}</p>
        </div>
      )
    })
  )
}

export default App;
