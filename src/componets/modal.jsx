import "./CSS/modal.css"
import { signup,logout } from '../auth';
const modal = () => {

    const handleSignOut = async () => {
        try {
          await logout();
           // Call the signOut function from your auth.js file
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      }; 
  return (
    <div className='modal'>
<div className="btn" onClick={handleSignOut}>Signout</div>
      
    </div>
  )
}

export default modal
