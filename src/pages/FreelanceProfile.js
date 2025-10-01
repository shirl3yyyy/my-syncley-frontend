import React from "react";
import { useParams } from "react-router-dom";
import "./FreelancerProfile.css";

function FreelancerProfile() {
  const { id } = useParams();

  // For now, just show ID — later we can fetch data from backend
  return (
    <section className="freelancer-profile">
      <h2>Freelancer Profile</h2>
      <p>Profile details for freelancer ID: {id}</p>
    </section>
  );
}

export default FreelancerProfile;
