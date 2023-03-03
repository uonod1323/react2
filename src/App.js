import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">홍짱다이스키</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
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
          <Route path="/detail" element={<div>상세페이지임</div>} />
          <Route path="/about"  element={<div>어바웃페이지임</div>}  />
        </Routes>

      </div>
  );
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
