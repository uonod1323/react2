import { createSlice } from "@reduxjs/toolkit"

let num;

let cartStore = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCount(state, action){
            duplCheck(state, action.payload); //중복체크 확인
            debugger;
            state[num].count++;
        },
        addCart(state, action){
            duplCheck(state, action.payload.id); //중복체크 확인
            if(num == action.payload.id){
                state[num].count++;
                console.log(JSON.parse(JSON.stringify(state)));
            }else{
                debugger;
                let newState = JSON.parse(JSON.stringify(state));
                let addArray = action.payload;
                newState.push(addArray);
                return newState;
            }
        }
    }
})

//저는중복이싫어요
function duplCheck(state, addedId){
    num = state.findIndex((a)=>{ 
        console.log(JSON.parse(JSON.stringify(a)));
        return a.id === addedId
        })
    //array 안에 있는 항목이 같은지 일일이 다 비교함
    //action.payload는 전달받은 값으로, id 값인 (1,2 등이 들어옴)
    //a에는 array가 들어옴. 저 array안에 있는 id와 action으로 받은 array를 비교해서
    //같은 항목이 있는 경우에 해당 array의 인덱스를 반환함 (0번째, 2번째 등등...)
}

export let {changeCount, addCart} = cartStore.actions;

export default cartStore;