import React from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import './Analytics.css';

const taskData = [
  { name: 'Week 1', completed: 5, pending: 3 },
  { name: 'Week 2', completed: 8, pending: 2 },
  { name: 'Week 3', completed: 12, pending: 4 },
  { name: 'Week 4', completed: 18, pending: 6 },
];

const priorityData = [
  { name: 'High', value: 8 },
  { name: 'Medium', value: 12 },
  { name: 'Low', value: 6 },
];

const difficultyData = [
  { name: 'Easy', count: 5 },
  { name: 'Medium', count: 10 },
  { name: 'Hard', count: 6 },
];

const COLORS = ['#FF5733', '#33FF57', '#3357FF'];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h2>Task Analytics</h2>

      {/* Task Completion Trend */}
      <div className="chart-container">
        <h3>Task Completion Trend</h3>
        <LineChart width={400} height={250} data={taskData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="completed" stroke="#4CAF50" />
          <Line type="monotone" dataKey="pending" stroke="#FF5733" />
        </LineChart>
      </div>

      {/* Priority Distribution */}
      <div className="chart-container">
        <h3>Task Priority Distribution</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={priorityData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {priorityData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Task Difficulty Overview */}
      <div className="chart-container">
        <h3>Task Difficulty Overview</h3>
        <BarChart width={400} height={250} data={difficultyData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#FF9800" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
