import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
const Budget = () => {
  const {budget,dispatch, currency} = useContext(AppContext);
  const setBudget = (curr_budget) => {
   
    dispatch({
        type: 'SET_BUDGET',
        payload: curr_budget
    });

}
  return (
    <div className="alert alert-secondary">
      Budget:{currency} {
      <input
        required="required"
        type="number"
        id="cost"
        value={budget}
        onChange={event => setBudget(event.target.value)}
       
      ></input>}
    </div>
  );
};
export default Budget;


