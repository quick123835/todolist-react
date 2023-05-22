import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleAddTodo = () => {
    if (inputValue.length === 0) {
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInputValue('');
  };

  const handleKeyDown = () => {
    if (inputValue.length == 0) {
      return;
    }
    setTodos(() => {
      return [
        ...todos,
        {
          id: Math.random * 100,
          isDone: false,
          title: inputValue,
        },
      ];
    });
    setInputValue('');
  };

  const handleToggleDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isEdit,
          };
        } else {
          return {
            ...todo,
            isEdit: false,
          };
        }
      }),
    );
  };

  const handleSave = ({ id, title }) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todos,
            title: title,
            isEdit: false,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default TodoPage;
