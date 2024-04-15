import React from "react";

function Select({options, value, onChange}) {
    return (
        <select
            value={value}
            onChange = {event => onChange(event.target.value)}
            >
            <option disabled value="Sorting">Sorting</option>
            {options.map(option =>
                <option value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default Select
