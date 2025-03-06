import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AddTask from './AddTask';
import Analytics from './Analytics';
import './Dashboard.css';
import TaskDetails from './TaskDetails';

const Dashboard = () => {
  const { user } = useAuth();
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const dummyTask = {
    title: 'Complete React Project',
    description: 'Build a task management app using React and Tailwind CSS.',
    startDate: '2025-03-01',
    endDate: '2025-03-10',
    estimatedTime: 20,
    priority: 'High',
    difficulty: 'Intermediate',
    category: 'Development',
    status: 'In Progress',
    attachments: { name: 'requirements.pdf' },
    subtasks: [
      'Set up project structure',
      'Create components',
      'Implement state management',
      'Add authentication',
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li onClick={() => setShowAnalytics(true)}>Analytics</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="user-info">
            {user?.avatar && (
              <img src={user.avatar} alt="Avatar" className="user-avatar" />
            )}
            <h2>Welcome, {user?.name || 'User'}!</h2>
          </div>
          <button className="add-task-btn" onClick={() => setShowAddTask(true)}>
            + Add Task
          </button>
        </header>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Tasks</h3>
            <p>24</p>
          </div>
          <div className="card">
            <h3>Completed Tasks</h3>
            <p>18</p>
          </div>
          <div className="card">
            <h3>Pending Tasks</h3>
            <p>6</p>
          </div>
        </div>

        {/* Task Details */}
        <TaskDetails task={dummyTask} />
      </div>

      {/* AddTask Modal */}
      {showAddTask && <AddTask onClose={() => setShowAddTask(false)} />}

      {/* Analytics Page */}
      {showAnalytics && <Analytics onClose={() => setShowAnalytics(false)} />}
    </div>
  );
};

export default Dashboard;
