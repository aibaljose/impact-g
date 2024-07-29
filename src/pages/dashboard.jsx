import { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // Import the Firebase database module
import { ref, get } from 'firebase/database';
import Dashcard from '../componets/dashcard';
import "../componets/CSS/dashcard.css";
import Winner from "../componets/winner";

const Dashboard = ({ loggedIn }) => {
    const [usersData, setUsersData] = useState({});
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

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
            setError("<div className='loginmess'>Please Login</div>");
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

    // Filter the user data based on the search term
    const filteredUsersData = Object.keys(usersData).filter((userId) => {
        const user = usersData[userId];
        const usernamedata = { ...user.name };
        return Object.values(usernamedata).some((name) =>
            name.split('::')[0].trim().toLowerCase().includes(searchTerm.toLowerCase())
        );
    }).reduce((obj, key) => {
        obj[key] = usersData[key];
        return obj;
    }, {});

    return (
        <div className="dashboardusr1">
            <input
                type="text"
                placeholder="Search names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />

            {loggedIn && (
                <>
                    <div className="tooltip">
                        ✅ - Verified by Admin | 🚩- Need Review | 🆗-Verified By Mentor
                    </div>
                    <ul className='dashboardusr'>
                        {Object.keys(filteredUsersData).map((userId) => {
                            const user = filteredUsersData[userId];
                            const usernamedata = { ...user.name };
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
                                ...user.data10,
                                ...user.data11,
                                ...user.Approved
                            };
                            return (
                                <li key={userId}>
                                    <Dashcard userId={userId} data={aggregatedData} name={usernamedata} />
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}

            {!loggedIn && <div className='loginmess'>Please Login</div>}
        </div>
    );
};

export default Dashboard;
