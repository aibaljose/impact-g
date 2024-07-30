import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import the Firebase database module
import { ref, get, update } from 'firebase/database';
// import "./CSS/updateScore.css"

const UpdateScore = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = ref(db, 'scoreboard/');
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const usersList = Object.keys(usersData).map((uid) => ({
            uid,
            ...usersData[uid],
          }));
          setUsers(usersList);
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleScoreChange = (uid, newScore) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.uid === uid ? { ...user, score: newScore } : user
      )
    );
  };

  const handleSave = async (uid) => {
    const user = users.find((user) => user.uid === uid);
    if (user) {
      try {
        const userRef = ref(db, `scoreboard/${uid}`);
        await update(userRef, { score: user.score });
        alert('Score updated successfully!');
      } catch (error) {
        console.error('Error updating score:', error.message);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="update-score-container">
        <div className="scoreup">
        <h2>Update User Scores</h2>
      <ul>
        {users.map((user) => (
          <li key={user.uid}>
            <span>{user.name}: </span>
            <input
              type="number"
              value={user.score}
              onChange={(e) => handleScoreChange(user.uid, e.target.value)}
            />
            <button onClick={() => handleSave(user.uid)}>Save</button>
          </li>
        ))}
      </ul>
        </div>
      
    </div>
  );
};

export default UpdateScore;
