import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from './../store/userSlice.js'
import { changeCount } from '../store/cartStore.js';
import { memo, useMemo, useState } from 'react';

let Child = memo(function(){
    console.log('재랜');
    return <div>자식임</div>
})

function 함수(){

}

function Cart(){

    let result = 함수();
    useMemo(()=>{return 함수()}, [state])

    let state = useSelector((state)=>{return state})
    let cart = useSelector((state)=>{return state.cartStore})
    let dispatch = useDispatch()
    let [count, setCount] = useState(0)

    return (
        <div>
            <Child count={count}></Child>
            <h4>{state.user.name} {state.user.age} 의 장바구니</h4>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{ dispatch(changeAge(100))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                { <tbody>
                    {cart.map((a,i)=>
                        <tr>
                            <td>{cart[i].id}</td>
                            <td>{cart[i].name}</td>
                            <td>{cart[i].count}</td>
                            <td>
                                <button onClick={(e)=>{
                                    dispatch(changeCount([cart[i].id, e.currentTarget.innerHTML]))
                                }}>-</button>
                                <button onClick={(e)=>{
                                    dispatch(changeCount([cart[i].id, e.currentTarget.innerHTML]))
                                }}>+</button>
                            </td>
                        </tr>
                    )}
                </tbody>}
            </Table> 
        </div>
    )
}

export default Cart;