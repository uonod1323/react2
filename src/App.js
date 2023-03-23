import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import Detail from './routes/Detail.js'
import Cart from './routes/Cart.js'
import axios from 'axios'

function App() {

  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj))
  let 꺼낸거 = localStorage.getItem('data')
  console.log(JSON.parse(꺼낸거));

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12])

  let [btnClickNum, setBtnClickNum] = useState(1);
  let navigate = useNavigate();

  return (
    <div className="App">

      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">홍짱다이스키</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <div className="main-bg"></div>
      <dialog>로딩중...</dialog>
        <Routes>
          <Route path="/" element={
            <>
              <div className="container">
                <div className="row">
                  <Card shoes={shoes}></Card>
                </div>
              </div>
              <button onClick={()=>{ 
                setBtnClickNum(btnClickNum + 1);
                let newNum = btnClickNum + 1;
                const dialog = document.querySelector("dialog");
                if(newNum <= 3){
                  dialog.showModal(); //로딩중 다이어로그 표시
                axios.get(`https://codingapple1.github.io/shop/data${newNum}.json`)
                .then((result)=>{
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                  dialog.close(); // 로딩중 다이얼로그 감추기
                 }).catch(()=>{
                  dialog.close(); // 로딩중 다이얼로그 감추기
                 })
                }else{
                  alert('3이상은 안된다...');
                }
              }}>더보기</button>
            </>
          } />
          <Route path="/detail/:id" element={
            <Detail shoes={shoes}/>   
          }/>

          <Route path="/cart" element={<Cart/>}/>

          <Route path="/about"  element={<About/>}>
            <Route path="member"  element={<div>멤버임</div>}  />
            <Route path="location"  element={<div>위치정보임</div>}  />
          </Route>

          <Route path="/event"  element={<Event/>}>
            <Route path="one"  element={<div>첫 주문시 양배추즙 서비스</div>}  />
            <Route path="two"  element={<div>생일기념 쿠폰받기</div>}  />
          </Route>

        </Routes>

      </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
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
