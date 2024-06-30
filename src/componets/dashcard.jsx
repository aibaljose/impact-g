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
                ))}
                </h3>
            </div>
<div className="dashcard">

            
            



            <ul>
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
                <li style={{textAlign:"center"}}>✅ Approved By <span style={{textDecoration:"underline"}} title='Rini Kurian, Shamini James, Admin: Aibal jose' >Mentor</span>  <h4>Aibal Jose</h4> </li>
            </ul>
        </div>
        </div>
        
    );
}

export default dashcard
