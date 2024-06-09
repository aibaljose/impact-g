import React from 'react'
import "./CSS/dashcard.css"

const dashcard = ({name,data}) => {
    return (
        <div className="dashcard">
            <h3>{name}</h3>
            <ul>
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default dashcard
