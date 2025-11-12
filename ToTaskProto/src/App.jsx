import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [draggedTask, setDraggedTask] = useState(null);

  // Load tasks and background from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('trello-tasks');
    const savedBackground = localStorage.getItem('trello-background');

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    if (savedBackground) {
      setBackgroundImage(savedBackground);
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('trello-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Save background to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('trello-background', backgroundImage);
  }, [backgroundImage]);

  // Add new task
  const addTask = () => {
    if (newTaskTitle.trim() === '') return;

    const task = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription,
      status: 'not-started'
    };

    setTasks([...tasks, task]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  // Remove task
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Move task to different status
  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  // Export tasks to JSON file
  const exportTasks = () => {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'toTask-tasks.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  // Import tasks from JSON file
  const importTasks = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedTasks = JSON.parse(e.target.result);
        setTasks(importedTasks);
        alert('Tasks imported successfully!');
      } catch (error) {
        alert('Error importing tasks. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  // Handle background image upload
  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Drag and drop handlers
  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (status) => {
    if (draggedTask) {
      moveTask(draggedTask.id, status);
      setDraggedTask(null);
    }
  };

  // Filter tasks by status
  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  // Get next status for quick move buttons
  const getNextStatus = (currentStatus) => {
    if (currentStatus === 'not-started') return 'in-progress';
    if (currentStatus === 'in-progress') return 'completed';
    return null;
  };

  const getPreviousStatus = (currentStatus) => {
    if (currentStatus === 'completed') return 'in-progress';
    if (currentStatus === 'in-progress') return 'not-started';
    return null;
  };

  return (
    <div 
      className="app" 
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header with controls */}
      <header className="header">
        <h1>My ToTask Board</h1>
        <div className="controls">
          <button onClick={exportTasks} className="btn-control">
            📥 Export Tasks
          </button>
          <label className="btn-control">
            📤 Import Tasks
            <input 
              type="file" 
              accept=".json" 
              onChange={importTasks} 
              style={{ display: 'none' }}
            />
          </label>
          <label className="btn-control">
            🎨 Change Background
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleBackgroundChange} 
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </header>

      {/* Add task form */}
      <div className="add-task-section">
        <input
          type="text"
          placeholder="Task title..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          className="task-input"
        />
        <textarea
          placeholder="Task description (optional)..."
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="task-textarea"
        />
        <button onClick={addTask} className="btn-add">
          ➕ Add Task
        </button>
      </div>

      {/* Kanban board columns */}
      <div className="board">
        {/* Not Started Column */}
        <div 
          className="column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop('not-started')}
        >
          <h2 className="column-title">📋 Not Started ({getTasksByStatus('not-started').length})</h2>
          <div className="tasks-container">
            {getTasksByStatus('not-started').map(task => (
              <div
                key={task.id}
                className="task-card"
                draggable
                onDragStart={() => handleDragStart(task)}
              >
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <button 
                    onClick={() => removeTask(task.id)}
                    className="btn-delete"
                  >
                    ❌
                  </button>
                </div>
                {task.description && (
                  <p className="task-description">{task.description}</p>
                )}
                <div className="task-actions">
                  {getNextStatus(task.status) && (
                    <button
                      onClick={() => moveTask(task.id, getNextStatus(task.status))}
                      className="btn-move"
                    >
                      ▶️ Move to In Progress
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div 
          className="column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop('in-progress')}
        >
          <h2 className="column-title">⚙️ In Progress ({getTasksByStatus('in-progress').length})</h2>
          <div className="tasks-container">
            {getTasksByStatus('in-progress').map(task => (
              <div
                key={task.id}
                className="task-card in-progress"
                draggable
                onDragStart={() => handleDragStart(task)}
              >
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <button 
                    onClick={() => removeTask(task.id)}
                    className="btn-delete"
                  >
                    ❌
                  </button>
                </div>
                {task.description && (
                  <p className="task-description">{task.description}</p>
                )}
                <div className="task-actions">
                  {getPreviousStatus(task.status) && (
                    <button
                      onClick={() => moveTask(task.id, getPreviousStatus(task.status))}
                      className="btn-move-back"
                    >
                      ◀️ Back
                    </button>
                  )}
                  {getNextStatus(task.status) && (
                    <button
                      onClick={() => moveTask(task.id, getNextStatus(task.status))}
                      className="btn-move"
                    >
                      ▶️ Complete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Column */}
        <div 
          className="column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop('completed')}
        >
          <h2 className="column-title">✅ Completed ({getTasksByStatus('completed').length})</h2>
          <div className="tasks-container">
            {getTasksByStatus('completed').map(task => (
              <div
                key={task.id}
                className="task-card completed"
                draggable
                onDragStart={() => handleDragStart(task)}
              >
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <button 
                    onClick={() => removeTask(task.id)}
                    className="btn-delete"
                  >
                    ❌
                  </button>
                </div>
                {task.description && (
                  <p className="task-description">{task.description}</p>
                )}
                <div className="task-actions">
                  {getPreviousStatus(task.status) && (
                    <button
                      onClick={() => moveTask(task.id, getPreviousStatus(task.status))}
                      className="btn-move-back"
                    >
                      ◀️ Back to In Progress
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Assistant Button (Frontend only) */}
      <button className="ai-assistant-btn" title="AI Assistant (Coming Soon)">
        🤖
      </button>
    </div>
  );
}

export default App;
