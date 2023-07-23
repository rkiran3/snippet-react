import React from 'react';

export default function Dropdown({label, options, handleChange}) {

    return (
        <div>
        <label>
            <select name="category" defaultValue="Productivity" style={{width: 500}} onChange={handleChange}>
                {options.map((option) => {
                    return (
                    <option key={option.label} value={option.value}>{option.label}</option>
                    )
                })}
            </select>
        </label>
        </div>
    )

}