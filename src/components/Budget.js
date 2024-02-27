import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({ currency }) => { // Receive currency as a prop
    const { budget, spending } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        let value = parseInt(event.target.value);
        if (value > 20000) {
            setNewBudget(20000);
            alert("Budget cannot exceed £20,000.");
        } else if (value < spending) {
            alert("Budget cannot be lower than spending.");
        } else {
            setNewBudget(value);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} {budget}</span>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;
