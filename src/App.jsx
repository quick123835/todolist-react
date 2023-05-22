import './App.scss';
import { TodoPage, LoginPage, SignUpPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
          <Route path="todo" element={<TodoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
