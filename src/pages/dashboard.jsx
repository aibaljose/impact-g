
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // Import the Firebase database module
import { ref, set, push, update, get } from 'firebase/database';
import Dashcard  from '../componets/dashcard';
import "../componets/CSS/dashcard.css"
import Winner from "../componets/winner"


const dashboard = () => {
    const [usersData, setUsersData] = useState("");
    const [error, setError] = useState('');
    const fetchAllUsers = async () => {
        try {
            const usersRef = ref(db, 'users');
            const snapshot = await get(usersRef);
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                console.log('No data available');
                return null;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError("Please Login To access the data"); 

            return null;
        }
    };

    useEffect(() => {
        const getUsersData = async () => {
            const usersData = await fetchAllUsers();
            setUsersData(usersData);
        };
        getUsersData();
    }, []);



  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

    return (
        <div className="dashboardusr1">
            <div className="tooltip">
            ✅ - Verified by Admin | 🚩- Need Review | 🆗-Verified By Mentor
            </div>
            <ul className='dashboardusr' >
                {Object.keys(usersData).map((userId) => {
                    const user = usersData[userId];
                   
                    
                    const usernamedata ={...user.name}
                    const aggregatedData = {
                        ...user.data1,
                        ...user.data2,
                        ...user.data3,
                        ...user.data4,
                        ...user.data5,
                        ...user.data6,
                        ...user.data7,
                        ...user.data8,
                        ...user.data9,
                        ...user.Approved
                        
                    };
                    return (
                        <li key={userId}>
                            <Dashcard userId={userId} data={aggregatedData} name={usernamedata} />
                        </li>
                    );
                })}
            </ul>

            
           
        </div>
    );
};



export default dashboard
