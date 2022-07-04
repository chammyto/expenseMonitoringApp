import React from 'react';  // iimport ang useState
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
// Kinahanglan sulod sa component function ibutang ang useState
  
  return (
    <li>
    <Card className='expense-item'>
     <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem; // kinahanglan eexport para magamit or maaccess sa lain nga components

//Note: Mogamit ta ug useState para mailisan ang initial values sa imong components. 

/** 
 * State can be updated in many ways!
Thus far, we update our state upon user events (e.g. upon a click).

That's very common but not required for state updates! You can update states for whatever reason you may have.

Later in the course, we'll see Http requests that complete (where we then want to update the state based on the 
  Http response we got back) but you could also be updating state because a timer (set with setTimeout()) expired for example.
 * 
 * 
 */
