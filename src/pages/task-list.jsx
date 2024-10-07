import { Badge, Button, Form, ListGroup, Stack } from "react-bootstrap";

const TaskListPage = () => {
  const tasks = [
    {
      _id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "in_progress",
    },
    {
      _id: "2",
      title: "Task 2",
      description: "Description 2",
      status: "completed",
    },
    {
      _id: "3",
      title: "Task 3",
      description: "Description 3",
      status: "in_progress",
    },
    {
      _id: "4",
      title: "Task 4",
      description: "Description 4",
      status: "completed",
    },
    {
      _id: "5",
      title: "Task 5",
      description: "Description 5",
      status: "in_progress",
    },
  ];
  return (
    <Stack gap={3}>
      {/* logged in */}
      <Form className="bg-light d-flex flex-column justify-content-center align-items-center border p-5 rounded">
        <h2>New Task</h2>
        <Form.Group className="mb-3 w-100">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" required />
        </Form.Group>
        <Form.Group className="mb-3 w-100">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
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
              <Button variant="outline-primary" size="sm" className="me-2">
                {task.status === "completed"
                  ? "Mark Incomplete"
                  : "Mark Complete"}
              </Button>
              <Button variant="outline-danger" size="sm">
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
