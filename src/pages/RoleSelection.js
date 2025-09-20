import { useNavigate } from 'react-router-dom';

function RoleSelection() {
    const navigate = useNavigate();

    const handleSection = (role) => {
        navigate(`/signup?role=${role}`);
    };

    return(
        <div className="role-selection-container">
            <p>Select your role</p>
            <div className="role-buttons">
                <button color="primary" onClick={() => handleSection("client")}>Client</button>
                <button color="secondary" onClick={() => handleSection("freelancer")}>Freelancer</button>
            </div>
           </div>
       );
    }

    
export default RoleSelection;