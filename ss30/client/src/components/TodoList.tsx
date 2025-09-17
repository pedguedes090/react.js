import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import axios from 'axios'

interface Task {
  id: number
  title: string
  status: 'completed' | 'in-progress'
}

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filterActive, setFilterActive] = useState('all')

  useEffect(() => { 
    GetAllTask()
  }, [])

  const GetAllTask = () => {
    axios.get('http://localhost:8080/tasks')
      .then(res => {
        setTasks(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handelAddTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      title: title,
      status: 'in-progress'
    }
    axios.post('http://localhost:8080/tasks', newTask)
      .then(res => {
        console.log(res.data)
        GetAllTask()
        // Clear input
        const input = document.getElementById('addTask') as HTMLInputElement
        input.value = ''
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDeleteTask = (id: number) => {
    axios.delete(`http://localhost:8080/tasks/${id}`)
      .then(res => {
        console.log(res.data)
        GetAllTask()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleUpdateTask = (id: number, status: 'completed' | 'in-progress') => {
    axios.patch(`http://localhost:8080/tasks/${id}`, { status: status })
      .then(res => {
        console.log(res.data)
        GetAllTask()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const [editTask, setEditTask] = useState("");
  const handleChangeEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEditTask(e.target.value);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskEditId, setTaskEditId] = useState<number | null>(null);
  
  const showModal = (taskId: number) => {
    const task = tasks.find(t => t.id === taskId)
    if (task) {
      setEditTask(task.title)
    }
    setIsModalOpen(true);
    setTaskEditId(taskId);
  };

  const handleOk = (taskId: number, title: string) => {
    handelEditTask(taskId, title);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handelEditTask = (taskId: number, title: string) => {
    axios.patch(`http://localhost:8080/tasks/${taskId}`, { title: title })
      .then(res => {
        console.log(res.data)
        GetAllTask()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const completedTask = () => {
    setFilterActive('completed')
    axios.get('http://localhost:8080/tasks?status=completed')
      .then(res => {
        setTasks(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const inProgressTask = () => {
    setFilterActive('in-progress')
    axios.get('http://localhost:8080/tasks?status=in-progress')
      .then(res => {
        setTasks(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const DeleteTaskCompleted = () => {
    axios.get('http://localhost:8080/tasks?status=completed')
      .then(res => {
        const completedTasks: Task[] = res.data;
        completedTasks.forEach((task) => {
          axios.delete(`http://localhost:8080/tasks/${task.id}`)
            .then(res => {
              console.log(res.data)
              GetAllTask()
            })
            .catch(err => {
              console.log(err)
            })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const DeleteAllTask = () => {
    axios.get('http://localhost:8080/tasks')
      .then(res => {
        const allTasks: Task[] = res.data;
        allTasks.forEach((task) => {
          axios.delete(`http://localhost:8080/tasks/${task.id}`)
            .then(res => {
              console.log(res.data)
              GetAllTask()
            })
            .catch(err => {
              console.log(err)
            })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#333',
          margin: '0'
        }}>Quản lý công việc</h1>
      </div>
      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <input 
          type="text" 
          name="addTask" 
          id="addTask" 
          placeholder='Nhập tên công việc'
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '14px',
            marginBottom: '12px',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
        <button 
          onClick={() => {
            const title = (document.getElementById('addTask') as HTMLInputElement).value
            if (title.trim()) {
              handelAddTask(title)
            }
          }}
          style={{
            width: '100%',
            padding: '12px',
            background: '#4096ff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Thêm công việc
        </button>
      </div>
      <div style={{
        background: '#f8f9fa',
        padding: '15px',
        borderRadius: '12px',
        marginBottom: '20px',
        display: 'flex',
        gap: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <button 
          onClick={() => { 
            setFilterActive('all')
            GetAllTask() 
          }}
          style={{
            padding: '8px 16px',
            border: '1px solid #d9d9d9',
            background: filterActive === 'all' ? '#4096ff' : 'white',
            color: filterActive === 'all' ? 'white' : '#333',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Tất cả
        </button>
        <button 
          onClick={() => { completedTask() }}
          style={{
            padding: '8px 16px',
            border: '1px solid #d9d9d9',
            background: filterActive === 'completed' ? '#4096ff' : 'white',
            color: filterActive === 'completed' ? 'white' : '#333',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Hoàn thành
        </button>
        <button 
          onClick={() => { inProgressTask() }}
          style={{
            padding: '8px 16px',
            border: '1px solid #d9d9d9',
            background: filterActive === 'in-progress' ? '#4096ff' : 'white',
            color: filterActive === 'in-progress' ? 'white' : '#333',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Đang thực hiện
        </button>
      </div>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        minHeight: '200px'
      }}>
        {tasks.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#999',
            fontStyle: 'italic'
          }}>
            Không có công việc nào
          </div>
        ) : (
          tasks.map((task, index) => (
            <div 
              key={task.id} 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                borderBottom: index === tasks.length - 1 ? 'none' : '1px solid #f0f0f0',
                gap: '12px'
              }}
            >
              <input 
                type="checkbox" 
                name={task.title} 
                id={`${task.id}`} 
                checked={task.status === 'completed'} 
                onChange={() => handleUpdateTask(task.id, task.status === 'completed' ? 'in-progress' : 'completed')}
                style={{
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer'
                }}
              />
              <p style={{
                textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                flex: 1,
                margin: 0,
                fontSize: '14px',
                color: task.status === 'completed' ? '#999' : '#333'
              }}>
                {task.title}
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => showModal(task.id)}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #ffd591',
                    background: '#fff7e6',
                    color: '#fa8c16',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  ✏️
                </button>
                <button 
                  onClick={() => handleDeleteTask(task.id)}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #ffccc7',
                    background: '#fff2f0',
                    color: '#ff4d4f',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center'
      }}>
        <button 
          onClick={() => { DeleteTaskCompleted() }}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer',
            background: '#ff4d4f',
            color: 'white'
          }}
        >
          Xóa công việc hoàn thành
        </button>
        <button 
          onClick={() => { DeleteAllTask() }}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer',
            background: '#ff4d4f',
            color: 'white'
          }}
        >
          Xóa tất cả công việc
        </button>
      </div>
      <Modal
        title="Chỉnh sửa công việc"
        open={isModalOpen}
        onOk={() => {
          if (taskEditId !== null) {
            handleOk(taskEditId, editTask);
          }
        }}
        onCancel={handleCancel}
      >
        <input 
          type="text" 
          name="editTask" 
          id="editTask" 
          placeholder='Nhập tên công việc' 
          value={editTask} 
          onChange={handleChangeEditTask}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d9d9d9',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </Modal>
    </div>
  )
}

export default TodoList
