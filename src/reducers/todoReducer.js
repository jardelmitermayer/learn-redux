import {
    ADD_TODO_SUCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO
}  from '../Actions/index';


const initialState ={
    loading:false,
    todos: [],
    error:null
};

export default function todosReducer(state=initialState,action) {

    switch (action.type){
        case ADD_TODO_STARTED:
            return {
                ...state,
                loading:true
            };
        case ADD_TODO_SUCESS:
            return {
                ...state,
                loading:false,
                error:null,
                todos: [...state.todos, action.payload]
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload.error
            };
        default:
            return state;
    }

}