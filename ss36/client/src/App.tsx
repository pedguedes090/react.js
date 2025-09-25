import FilterControls from './components/FilterControls';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addData,deleteData,completedData, selectTaskList } from './slice/TaskList.slices';
import type { AppDispatch } from './store';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: tasks, loading } = useSelector(selectTaskList);
  console.log(tasks)
  // const [tasks, setTasks] = useState<Task[]>([
  //   { id: '1', title: 'Học Redux Toolkit', completed: false, priority: 'high' },
  //   { id: '2', title: 'Làm bài tập TS', completed: true, priority: 'medium' },
  // ]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
  });

  const handleAdd = (title: string, priority: 'low' | 'medium' | 'high') => {
    const newTask = { 
      id: Date.now().toString(), 
      title, 
      completed: false, 
      priority 
    };
    
    dispatch(addData(newTask));
  };

  const handleToggle = (id: string) => {
    dispatch(completedData(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteData(id));
  };

  const filteredTasks = (tasks || []).filter((t) => {

    const matchStatus =
      filters.status === 'all' ||
      (filters.status === 'completed' && t.completed) ||
      (filters.status === 'active' && !t.completed);

    const matchPriority = filters.priority === 'all' || t.priority === filters.priority;

    const matchSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div>Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm onAdd={handleAdd} />
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
