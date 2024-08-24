import React, { useState } from "react";

const FetchTodo: React.FC = () => {
  const [data, setData] = useState<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setData(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const result = await response.json();
      setData(result);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  let content;
  if (loading) {
    content = <p>Waiting...</p>;
  } else if (data) {
    content = (
      <div>
        <h3>Todo Item</h3>
        <p>
          <strong>User ID:</strong> {data.userId}
        </p>
        <p>
          <strong>ID:</strong> {data.id}
        </p>
        <p>
          <strong>Title:</strong> {data.title}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {data.completed ? "Completed" : "Not Completed"}
        </p>
      </div>
    );
  } else {
    content = <p>No data available</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Todo</button>
      <div>{content}</div>
    </div>
  );
};

export default FetchTodo;
