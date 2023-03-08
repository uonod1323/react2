import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props){

  let [warnDiv, setWarnDiv]= useState(true);
  let [count, setCount] = useState(0);
  let [input, setInput] = useState('');

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


    let {id} = useParams();
    const result = props.shoes.filter(item => item.id == id)[0];

    return(
      <div className="container">
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
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }

  

export default Detail;