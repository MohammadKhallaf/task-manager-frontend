import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Form, ListGroup, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const TaskListPage = () => {
  const auth = useSelector((state) => state.auth);
  const [tasks, setTasks] = useState([]);

  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/tasks/",
        {
          title: taskForm.title,
          description: taskForm.description,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then(() => {
        toast.success("Task Added!");
        setTaskForm({
          title: "",
          description: "",
        });
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };
  function fetchTasksList() {
    axios
      .get("http://localhost:5000/api/tasks/", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        setTasks(response.data);
      });
  }
  function deleteTask(taskId) {
    axios
      .delete("http://localhost:5000/api/tasks/" + taskId, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        fetchTasksList();
        toast.success("Task Deleted!");
      });
  }

  function toggleTaskComplete(taskId, status) {
    axios
      .patch(
        "http://localhost:5000/api/tasks/" + taskId,
        { status: status === "completed" ? "in_progress" : "completed" },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((response) => {
        fetchTasksList();
        toast.success("Task Completed!");
      });
  }
  useEffect(() => {
    if (auth.token) {
      fetchTasksList();
    }
  }, [auth]);

  return (
    <Stack gap={3}>
      {/* logged in */}
      {auth.token && (
        <Form
          onSubmit={handleFormSubmit}
          className="bg-light d-flex flex-column justify-content-center align-items-center border p-5 rounded"
        >
          <h2>New Task</h2>
          <Form.Group className="mb-3 w-100">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              required
              value={taskForm.title}
              onChange={(event) => {
                setTaskForm((prevObj) => {
                  return { ...prevObj, title: event.target.value };
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              required
              value={taskForm.description}
              onChange={(event) => {
                setTaskForm((prevObj) => {
                  return { ...prevObj, description: event.target.value };
                });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      )}
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={task._id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{task.title}</h5>
              <p className="mb-1">{task.description}</p>
              <Badge
                bg={
                  task.status === "completed"
                    ? "success"
                    : task.status === "in_progress"
                    ? "warning"
                    : "secondary"
                }
              >
                {task.status}
              </Badge>
            </div>
            <div>
              <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                onClick={() => toggleTaskComplete(task._id, task.status)}
              >
                {task.status === "completed"
                  ? "Mark Incomplete"
                  : "Mark Complete"}
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Stack>
  );
};

export default TaskListPage;
