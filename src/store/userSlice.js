import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state){
            return 'john' + state
        },
        changeAge(state, a){
            state.age += a.payload
        },
    }
})

export let {changeName, changeAge} = user.actions;

export default user;