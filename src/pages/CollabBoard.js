import React from "react";
import Card from "../components/Card/Card";


function CollabBoard() {
  return (
    <div className="collab-board">
      <h2 className="board-title">Project Collaboration Board</h2>
      <div className="board-columns">
        
        <div className="board-column">
          <h3>To Do</h3>
          <Card title="Design Landing Page" />
          <Card title="Set up Database" />
        </div>

        <div className="board-column">
          <h3>In Progress</h3>
          <Card title="Develop Navbar" />
        </div>

        <div className="board-column">
          <h3>Done</h3>
          <Card title="Login Page" />
          <Card title="Role Selection" />
        </div>

      </div>
    </div>
  );
}

export default CollabBoard;
