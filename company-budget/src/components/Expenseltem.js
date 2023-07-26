import React, { useContext } from 'react';
import { FaPlusCircle,FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.currency}{props.cost}</td>
        <td><FaPlusCircle color="green" size='1.5em' onClick={event=> increaseAllocation(props.name)}/></td>
        <td><FaMinusCircle color="red" size='1.5em'  onClick={event=> decreaseAllocation(props.name)}/></td>
        </tr>
    );
};

export default ExpenseItem;