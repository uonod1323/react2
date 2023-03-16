import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from './../store/cartStore.js';

function Detail(props){

  let [warnDiv, setWarnDiv]= useState(true);
  let [count, setCount] = useState(0);
  let [input, setInput] = useState('');
  let [탭, 탭변경] = useState(0);
  let [fade, setFade] = useState('');

  let cartStore = useSelector((state)=>{return state.cartStore});
  let dispatch = useDispatch();

    useEffect(()=>{
      const timer = setTimeout(() => {
        setWarnDiv(false)
      }, 2000);

      if(/\d/.test(input)){
        alert("숫자는 입력할 수 없습니다.");
        setInput('');
        document.querySelector('#inp').value = '';
      }

      return () => clearTimeout(timer);
    }, [count,input])

    useEffect(()=>{   
      let fader = setTimeout(()=>{ setFade('end') }, 100)
      return ()=>{
        clearTimeout(fader);
        setFade('');
      }
    }, [])

    let {id} = useParams();
    const result = props.shoes.filter(item => item.id == id)[0];

    return(
      <div className={ `container start ${fade}` }>
        { warnDiv == true ? 
          <div className="alert alert-warning">2초 이내 구매시 할인</div> 
          : null
        }
        <input id="inp" onKeyUp={(e)=>{setInput(e.target.value)}}></input>
        <button onClick={()=>{setCount(count+1)}}>{count}버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{result.title}</h4>
            <p>{result.content}</p>
            <p>{result.price}원</p>
            <button className="btn btn-danger" onClick={()=>{
              console.log(cartStore);
              dispatch(addCart(result));
            }}>주문하기</button> 
          </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item onClick={()=>{탭변경(0)}}>
            <Nav.Link eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={()=>{탭변경(1)}}>
            <Nav.Link eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={()=>{탭변경(2)}}>
            <Nav.Link eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭}/>
      </div> 
    )
  }

  function TabContent({탭}){  

      let [fade, setFade] = useState('');

      useEffect(()=>{   
        let a = setTimeout(()=>{ setFade('end') }, 100)
        return ()=>{
          clearTimeout(a);
          setFade('');
        }
      }, [탭])

      return <div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
      </div>
  }

export default Detail;