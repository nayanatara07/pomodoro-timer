import React, { useContext, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const SetPomodoro = () => {
    const [newTimer, setNewTimer] = useState({
        work: 1,
        short: 1,
        long: 1,
        active: 'work'
    });

    const { updateExecute } = useContext(SettingsContext);

    const handleChange = (input) => {
        const { name, value } = input.target;
        setNewTimer((prev) => ({
            ...prev,
            [name]: parseInt(value, 10) || 0
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateExecute(newTimer);
    };

    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        className="input"
                        type="number"
                        name="work"
                        min="1"
                        onChange={handleChange}
                        value={newTimer.work}
                    />
                    <input
                        className="input"
                        type="number"
                        name="short"
                        min="1"
                        onChange={handleChange}
                        value={newTimer.short}
                    />
                    <input
                        className="input"
                        type="number"
                        name="long"
                        min="1"
                        onChange={handleChange}
                        value={newTimer.long}
                    />
                </div>
                <button type="submit">Set Timer</button>
            </form>
        </div>
    );
};

export default SetPomodoro;
