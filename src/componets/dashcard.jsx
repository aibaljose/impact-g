import React from 'react'
import "./CSS/dashcard.css"

const dashcard = ({name,data}) => {
    return (
        <div>

<div className="headname">
            <h3>{Object.entries(name).map(([key, value]) => (
                    <li key={key}>
                        {value.split('::')[0].trim()}<br></br>
                        
                        <p style={{fontSize:"6px",marginTop:"4px"}} >{value.split('::')[1].trim()}</p>

                    </li>
                ))}</h3>
            </div>
<div className="dashcard">

            
            



            <ul>
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>
        </div>
        
    );
}

export default dashcard
