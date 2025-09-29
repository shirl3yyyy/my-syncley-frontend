import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./CollabBoard.css";

function Board() {
  const [columns, setColumns] = useState({
    todo: [
      { id: 1, text: "First Task", priority: "high" },
      { id: 2, text: "Second Task", priority: "medium" },
    ],
    inProgress: [
      { id: 3, text: "Task in Progress", priority: "low" },
    ],
    done: [
      { id: 4, text: "Completed Task", priority: "medium" },
    ],
  });

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("medium");

  const addTask = () => {
    if (!newTask.trim()) return;
    const id = Date.now(); // unique ID
    setColumns((prev) => ({
      ...prev,
      todo: [...prev.todo, { id, text: newTask, priority: newPriority }],
    }));
    setNewTask("");
    setNewPriority("medium");
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceTasks = Array.from(columns[sourceCol]);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceCol === destCol) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns((prev) => ({ ...prev, [sourceCol]: sourceTasks }));
    } else {
      const destTasks = Array.from(columns[destCol]);
      destTasks.splice(destination.index, 0, movedTask);
      setColumns((prev) => ({
        ...prev,
        [sourceCol]: sourceTasks,
        [destCol]: destTasks,
      }));
    }
  };

  return (
    <div className="board-container">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(columns).map((col) => (
          <Droppable droppableId={col} key={col}>
            {(provided, snapshot) => (
              <div
                className="board-column"
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: snapshot.isDraggingOver ? "#e0f7ff" : "#fefefe",
                }}
              >
                <h3>{col}</h3>
                {columns[col].map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        className={`task-card ${task.priority}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 5px 15px rgba(0,0,0,0.3)"
                            : "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                      >
                        <span>{task.text}</span>
                        <span className="priority">{task.priority}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                {col === "todo" && (
                  <div className="add-task">
                    <input
                      type="text"
                      placeholder="New task"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                    />
                    <select
                      value={newPriority}
                      onChange={(e) => setNewPriority(e.target.value)}
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                    <button className="add-task-btn" onClick={addTask}>
                      Add
                    </button>
                  </div>
                )}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default Board;
