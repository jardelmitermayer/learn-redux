import {
    ADD_TODO_SUCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO
} from './types';

import axios from 'axios';

export const addTodo = ({ title, userId }) => {
    return (dispatch, getState) => {
        dispatch(addTodoStarted());
        
        console.log('current state:', getState());

        axios.post(`https://jsonplaceholder.typicode.com/todos`, {
            title,
            userId,
            completed: false
          })
          .then(res =>{
              dispatch(addTodoSucess(res.data));
          })
          .catch(err => {
              dispatch(addTodoFailure(err.message));
          });
    };
};

const addTodoSucess = todo => ({
    type: ADD_TODO_SUCESS,
    payload:{
        ...todo
    }
});

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});