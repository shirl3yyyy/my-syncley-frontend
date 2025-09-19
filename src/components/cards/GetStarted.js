import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();

    const handleSection = (role) => {
        if(role === "client") {
            navigate("/signup?role=client");
        } else{
            navigate("/signup?role=freelancer");
    }
    };

    return(
        <div className="get-started-container">
            {!showOptions ? (
                <button className="get-started-button" onClick={() => setShowOptions(true)}>Get Started</button>
            ) : (
                <div className="role-selection">
                    <h3>Select Your Role</h3>
                    <button onClick={() => handleSection("client")}>Client</button>
                    <button onClick={() => handleSection("freelancer")}>Freelancer</button>
                </div>
            )}
        </div>
    );
}

export default GetStarted;
