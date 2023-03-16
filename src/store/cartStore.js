import { createSlice } from "@reduxjs/toolkit"

let cartStore = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCount(state, action){
            debugger;
            state[action.payload].count += 1
        },
        addCart(state, action){
            let aaa = JSON.stringify([...state])
            console.log(aaa);
            debugger;
        }
    }
})

export let {changeCount, addCart} = cartStore.actions;

export default cartStore;