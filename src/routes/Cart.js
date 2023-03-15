import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount } from './../store.js'
import { changeAge } from './../store/userSlice.js'

function Cart(){

    let state = useSelector((state)=>{return state})
    let cart = useSelector((state)=>{return state.cart})
    let dispatch = useDispatch()

    return (
        <div>
            <h4>{state.user.name} {state.user.age} 의 장바구니</h4>
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
                <tbody>
                    {cart.map((a,i)=>
                        <tr>
                            <td>1</td>
                            <td>{cart[i].name}</td>
                            <td>{cart[i].count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(changeCount())
                                }}>+</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;