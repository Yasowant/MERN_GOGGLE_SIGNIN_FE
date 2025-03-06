import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details-container">
      <h3>{task.title}</h3>
      <p>
        <strong>Description:</strong> {task.description}
      </p>
      <p>
        <strong>Start Date:</strong> {task.startDate}
      </p>
      <p>
        <strong>End Date:</strong> {task.endDate}
      </p>
      <p>
        <strong>Estimated Time:</strong> {task.estimatedTime} hours
      </p>
      <p>
        <strong>Priority:</strong> {task.priority}
      </p>
      <p>
        <strong>Difficulty:</strong> {task.difficulty}
      </p>
      <p>
        <strong>Category:</strong> {task.category}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      {task.attachments && (
        <p>
          <strong>Attachment:</strong> {task.attachments.name}
        </p>
      )}
      <h4>Subtasks:</h4>
      <ul>
        {task.subtasks.length > 0 ? (
          task.subtasks.map((subtask, index) => <li key={index}>{subtask}</li>)
        ) : (
          <p>No subtasks added.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskDetails;
