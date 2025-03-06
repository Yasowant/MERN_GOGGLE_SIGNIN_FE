import { useState } from 'react';
import './AddTask.css';

const AddTask = ({ onClose }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    estimatedTime: '',
    priority: 'Medium',
    difficulty: 'Medium',
    category: 'Work',
    status: 'Pending',
    attachments: null,
    subtasks: [],
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setTask({ ...task, attachments: e.target.files[0] });
  };

  const handleSubtaskChange = (index, value) => {
    const updatedSubtasks = [...task.subtasks];
    updatedSubtasks[index] = value;
    setTask({ ...task, subtasks: updatedSubtasks });
  };

  const addSubtask = () => {
    setTask({ ...task, subtasks: [...task.subtasks, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Added:', task);
  };

  return (
    <div className="add-task-container">
      <div
        className="add-task-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>Add New Task</h2>
        <button
          className="close-button"
          onClick={onClose}
          style={{
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          required
        />

        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={task.startDate}
          onChange={handleChange}
          required
        />

        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={task.endDate}
          onChange={handleChange}
          required
        />

        <label>Estimated Time (hours):</label>
        <input
          type="number"
          name="estimatedTime"
          value={task.estimatedTime}
          onChange={handleChange}
          required
        />

        <label>Priority:</label>
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label>Difficulty:</label>
        <select
          name="difficulty"
          value={task.difficulty}
          onChange={handleChange}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <label>Category:</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={task.category}
          onChange={handleChange}
          required
        />

        <label>Status:</label>
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <label>Attachments:</label>
        <input type="file" onChange={handleFileChange} />

        <label>Subtasks:</label>
        {task.subtasks.map((subtask, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Subtask ${index + 1}`}
            value={subtask}
            onChange={(e) => handleSubtaskChange(index, e.target.value)}
          />
        ))}
        <button type="button" onClick={addSubtask}>
          Add Subtask
        </button>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
